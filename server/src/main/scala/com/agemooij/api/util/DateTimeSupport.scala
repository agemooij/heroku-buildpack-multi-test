package com.agemooij.api
package util

import scala.util.control.NonFatal

import org.joda.time._
import org.joda.time.chrono.ISOChronology
import org.joda.time.format.DateTimeFormat

import spray.httpx.unmarshalling._
import spray.json._


trait DateTimeSupport {
  private val pattern = "yyyy-MM-dd'T'HH:mm:ss'Z'"
  private val utcChronology = ISOChronology.getInstanceUTC
  private val dateFormat = DateTimeFormat.forPattern(pattern)
                                         .withChronology(utcChronology)
                                         .withZoneUTC()

  def dateTimeToString(dateTime: ReadableInstant) = dateFormat.print(dateTime)
  def dateTimeToJsString(dateTime: ReadableInstant) = JsString(dateTimeToString(dateTime))

  def stringToDateTime(string: String) = dateFormat.parseDateTime(string)
  def jsStringToDateTime(jsString: JsString) = stringToDateTime(jsString.value)

  def currentDateTimeUTC: DateTime = org.joda.time.DateTime.now(utcChronology)

  // Pretty unsafe conversions... probably better to wrap them in some protection
  implicit object DateTimeJsonFormat extends JsonFormat[DateTime] {
    def write(dateTime: DateTime) = dateTimeToJsString(dateTime)
    def read(jsValue: JsValue) = jsStringToDateTime(jsValue.asInstanceOf[JsString])
  }

  // used to unmarshal API parameters to DateTime
  implicit val stringToDateTimeDeserializer =
    new FromStringDeserializer[DateTime] {
      def apply(in: String) = {
        try {
          Right(stringToDateTime(in))
        } catch {
          case NonFatal(ex) => Left(MalformedContent(ex.toString, ex))
        }
      }
    }

  implicit class StringWithDateTimeConversion(string: String) {
    def toDateTime = stringToDateTime(string)
  }
}

object DateTimeSupport extends DateTimeSupport

package com.agemooij.api

import akka.actor._

import spray.http.StatusCodes._
import spray.httpx.SprayJsonSupport._
import spray.json.DefaultJsonProtocol._
import spray.routing._

import util._


trait ApiRoutes extends HttpService
                   with ExecutionContextSupport
                   with LoggingSupport {

  def apiRoutes =
    pathPrefix("api") {
      path("ping") {
        get {
          complete(OK, "pong")
        }
      }
    }
}

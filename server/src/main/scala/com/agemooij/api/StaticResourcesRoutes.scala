package com.agemooij.api

import akka.actor._

import spray.http.StatusCodes.SeeOther
import spray.http.Uri
import spray.http.Uri._
import spray.httpx.encoding._
import spray.routing._

import util._


trait StaticResourcesRoutes extends HttpService {
  def staticResourcesRoutes =
    (decompressRequest & compressResponse(Gzip)) {
      path("") {
        getFromResource("static/index.html")
      } ~
      getFromResourceDirectory("static") ~
      unmatchedPath { path =>
        redirect(Uri(path = Path("/"), fragment = Some(path.toString)), SeeOther)
      }
    }
}

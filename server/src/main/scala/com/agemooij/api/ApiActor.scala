package com.agemooij.api

import akka.actor._

import spray.routing._

import util._


object ApiActor {
  def props = Props[ApiActor]
}

class ApiActor extends HttpServiceActor
                  with ApiRoutes
                  with StaticResourcesRoutes
                  with ActorExecutionContextSupport
                  with ActorLogging {

  def receive = runRoute(
    apiRoutes ~ staticResourcesRoutes
  )
}

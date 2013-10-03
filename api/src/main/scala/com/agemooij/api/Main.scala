package com.agemooij.api

import akka.actor.{ActorSystem, Props}
import akka.io.IO

import spray.can.Http


object Main extends App {
  implicit val system = ActorSystem("agemooij-api")

  val settings = Settings(system)
  val api = system.actorOf(ApiActor.props, "api-actor")

  IO(Http) ! Http.Bind(listener = api,
                       interface = "0.0.0.0",
                       port = settings.Http.Port)
}

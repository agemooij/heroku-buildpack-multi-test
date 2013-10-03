package com.agemooij.api
package util


trait ExecutionContextSupport {
  import scala.concurrent.ExecutionContext
  implicit def executionContext: ExecutionContext
}

import akka.actor.Actor
trait ActorExecutionContextSupport { this: Actor =>
  implicit def executionContext = context.system.dispatcher
}


trait ActorRefFactorySupport {
  import akka.actor._
  implicit def actorRefFactory: ActorRefFactory

  /** Copied from the spray.util package object so we don't have to import it all the time. */
  def actorSystem(implicit refFactory: ActorRefFactory): ExtendedActorSystem =
    refFactory match {
      case x: ActorContext        ⇒ actorSystem(x.system)
      case x: ExtendedActorSystem ⇒ x
      case x                      ⇒ throw new IllegalArgumentException("Unsupported ActorRefFactory implementation: " + refFactory)
    }
}


trait LoggingSupport {
  import akka.event.LoggingAdapter
  def log: LoggingAdapter
}

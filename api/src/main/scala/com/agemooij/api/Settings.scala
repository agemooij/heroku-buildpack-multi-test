package com.agemooij.api

import akka.actor._

import com.typesafe.config.Config
import util.SettingsSupport


class Settings(config: Config, extendedSystem: ExtendedActorSystem) extends Extension with SettingsSupport {
  object Http {
    val Port = config.getInt("agemooij.http.port")
  }
}


object Settings extends ExtensionId[Settings] with ExtensionIdProvider {
  override def lookup = Settings
  override def createExtension(system: ExtendedActorSystem) = new Settings(system.settings.config, system)

  def apply(implicit context: ActorContext): Settings = apply(context.system)
}

package com.agemooij.api
package util

import com.typesafe.config._


trait SettingsSupport {
  implicit class EnhancedConfig(config: Config) {
    def getOptionalString(path: String): Option[String] = {
      if (config.hasPath(path)) Some(config.getString(path))
      else None
    }
  }
}

object SettingsSupport extends SettingsSupport

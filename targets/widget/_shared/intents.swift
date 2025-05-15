// targets/widget/_shared/intents.swift

import AppIntents
import SwiftUI
import WidgetKit

// TODO: These must be added to the WidgetBundle manually. They need to be linked outside of the _shared folder.
// @main
// struct exportWidgets: WidgetBundle {
//     var body: some Widget {
//         widgetControl0()
//         widgetControl1()
//     }
// }

@available(iOS 18.0, *)
struct widgetControl0: ControlWidget {
    // Unique ID for the control.
    static let kind: String = "com.bacon.clipdemo.0"
    var body: some ControlWidgetConfiguration {
      StaticControlConfiguration(kind: Self.kind) {
        ControlWidgetButton(action: OpenAppIntent0()) {
          // You can also use a custom image but it must be an SF Symbol.
          Label("App Settings", systemImage: "star")
        }
      }
      // This is the configuration for the widget.
      .displayName("Launch Settings")
      .description("A control that launches the app settings.")
    }
}

// This must be in both targets when `openAppWhenRun = true`. We can do that by adding it to the _shared folder.
// https://developer.apple.com/forums/thread/763851
@available(iOS 18.0, *)
struct OpenAppIntent0: ControlConfigurationIntent {
    static let title: LocalizedStringResource = "Launch Settings"
    static let description = IntentDescription(stringLiteral: "A control that launches the app settings.")
    static let isDiscoverable = true
    static let openAppWhenRun: Bool = true

    @MainActor
    func perform() async throws -> some IntentResult & OpensIntent {
        // Here's the URL we want to launch. It can be any URL but it should be a universal link for your app.
        return .result(opensIntent: OpenURLIntent(URL(string: "https://pillarvalley.expo.app/settings")!))
    }
}
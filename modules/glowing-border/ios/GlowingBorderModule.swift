import ExpoModulesCore

public class GlowingBorderModule: Module {
  public func definition() -> ModuleDefinition {
    Name("GlowingBorder")

    View(GlowingBorderView.self) {
    }
  }
}
import ExpoModulesCore
import SwiftUI



final class GlowingBorderView: ExpoView {
  private var controller: UIHostingController<MeshingAIProgressView<ReactContentView>>?
  private var currentContent: ReactContentView?

  required init(appContext: AppContext? = nil) {
    super.init(appContext: appContext)
    backgroundColor = .clear
    currentContent = ReactContentView(wrappedView: UIView())
    setupHostingView()
  }

  override func didUpdateReactSubviews() {
    if let first = reactSubviews().first {
      currentContent = ReactContentView(wrappedView: first)
      updateHostingView()
    }
  }

  private func setupHostingView() {
    guard let content = currentContent else { return }

    let view = MeshingAIProgressView(showGenerateAIMeshGradientAnimation: .constant(true)) {
      content
    }

    let hosting = UIHostingController(rootView: view)
    hosting.view.backgroundColor = .clear
    addSubview(hosting.view)

    hosting.view.translatesAutoresizingMaskIntoConstraints = false
    NSLayoutConstraint.activate([
      hosting.view.topAnchor.constraint(equalTo: topAnchor),
      hosting.view.bottomAnchor.constraint(equalTo: bottomAnchor),
      hosting.view.leadingAnchor.constraint(equalTo: leadingAnchor),
      hosting.view.trailingAnchor.constraint(equalTo: trailingAnchor)
    ])

    controller = hosting
  }

  private func updateHostingView() {
    guard let content = currentContent else { return }
    controller?.rootView = MeshingAIProgressView(showGenerateAIMeshGradientAnimation: .constant(true)) {
      content
    }
  }
}




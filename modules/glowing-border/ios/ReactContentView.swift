import SwiftUI

struct ReactContentView: UIViewRepresentable {
  let wrappedView: UIView

  func makeUIView(context: Context) -> UIView {
    wrappedView
  }

  func updateUIView(_ uiView: UIView, context: Context) {}
}

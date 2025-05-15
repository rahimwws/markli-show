import SwiftUI

enum SiriState {
  case none, thinking
}

import SwiftUI

public struct MeshingAIProgressView<Content: View>: View {
  @Binding var showGenerateAIMeshGradientAnimation: Bool

  @State private var state: SiriState = .thinking
  @State private var gradientSpeed: Float = 0.03
  @State private var timer: Timer?
  @State private var maskTimer: Float = 0.0

  let content: Content

  public init(showGenerateAIMeshGradientAnimation: Binding<Bool>, @ViewBuilder content: () -> Content) {
    self._showGenerateAIMeshGradientAnimation = showGenerateAIMeshGradientAnimation
    self.content = content()
  }

  public var body: some View {
    GeometryReader { geometry in
      ZStack {
        MeshGradientView(maskTimer: $maskTimer, gradientSpeed: $gradientSpeed)
          .scaleEffect(1.1)
          .opacity(containerOpacity)


        content
          .mask(
            AnimatedRectangle(size: geometry.size, cornerRadius: 48, t: CGFloat(maskTimer))
              .scaleEffect(computedScale)
              .blur(radius: animatedMaskBlur)
              .frame(width: geometry.size.width, height: geometry.size.height)
          )
      }
    }
    .onAppear {
      timer = Timer.scheduledTimer(withTimeInterval: 0.01, repeats: true) { _ in
        maskTimer += rectangleSpeed
      }
    }
    .onDisappear {
      timer?.invalidate()
    }
  }

  private var computedScale: CGFloat {
    switch state {
    case .none: return 1.2
    case .thinking: return 1.0
    }
  }

  private var rectangleSpeed: Float {
    switch state {
    case .none: return 0
    case .thinking: return 0.03
    }
  }

  private var animatedMaskBlur: CGFloat {
    switch state {
    case .none: return 8
    case .thinking: return 28
    }
  }

  private var containerOpacity: CGFloat {
    switch state {
    case .none: return 0
    case .thinking: return 1.0
    }
  }
}


extension Color {
  static var adaptive: Color {
    Color(UIColor { $0.userInterfaceStyle == .dark ? .black : .white })
  }
}

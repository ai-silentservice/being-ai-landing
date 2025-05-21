import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, MessageSquare, Sparkles } from "lucide-react"

const handleClickBeta = () => {
  window.location.href = "mailto:ms@silentservice.co.kr"
}

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Simple Header */}
      <header className="border-b py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-rose-600" />
            <span className="font-bold text-xl">BeAI</span>
          </div>
          {/* <Button size="sm">Try Now</Button> */}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-rose-50 to-white flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 bg-rose-200 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Brain className="h-12 w-12 text-rose-600" />
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-4 break-keep">
              지안: 사람처럼 대화하고, 사고하는 AI
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-[1.7em] break-keep">
              단순한 챗봇이 아닙니다. 사용자 상황을 이해하고, 판단까지 연결하는 고급 AI 서비스입니다.<br />
              월 구독형으로 제공되며, 현재 베타테스터 1,100명 확보. 정식 출시 준비 중입니다.
            </p>

            <Button size="lg" className="bg-rose-600 hover:bg-rose-700 mb-12" onClick={handleClickBeta}>
              베타 신청하기 <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <MessageSquare className="h-6 w-6 text-rose-600 mb-3 mx-auto" />
                <h3 className="font-bold mb-2 break-keep">질문에 답변 하는 게 아니라, 사람처럼 사고합니다</h3>
                <p className="text-sm text-gray-600 break-keep">
                  실제 사용자 표현을 반영한 프롬프트 구조로, 
                  단순한 질의응답이 아닌 사고형 대화를 제공합니다.<br/>
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Brain className="h-6 w-6 text-rose-600 mb-3 mx-auto" />
                <h3 className="font-bold mb-2 break-keep">GPT-4.1 기반 고도화 모델 탑재</h3>
                <p className="text-sm text-gray-600 break-keep">
                  GPT 응답의 한계를 뛰어넘기 위해 독자 프롬프트 구조를 설계했고, 
                  실시간 대화형 판단 능력을 갖춘 AI로 진화시켰습니다.<br/>
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Sparkles className="h-6 w-6 text-rose-600 mb-3 mx-auto" />
                <h3 className="font-bold mb-2 break-keep">한국 사용자 경험에 맞춘 LLM 서비스</h3>
                <p className="text-sm text-gray-600 break-keep">
                  자체 개발 프롬프트 기반으로,
                  복잡한 튜닝 없이 실사용자와 바로 연결되는 한국형 AI입니다.<br/>
                </p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-rose-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 break-keep">Experience the Future of AI Conversation</h2>
              <p className="text-gray-600 mb-6 break-keep">
                이제 프롬프트를 배우지 마세요.<br />
                어떤 식으로 대화해도 AI 는 당신의 성장과 확장을 책임질 것입니다.<br />
                1100명 사용자가 검증한 AI 정기 구독, 연간 플랜을 제공합니다.
              </p>
              <Button className="bg-rose-600 hover:bg-rose-700" onClick={handleClickBeta}>
                베타 신청
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Brain className="h-5 w-5 text-rose-400" />
            <span className="font-bold">BeAI</span>
          </div>
          <div className="text-gray-400 text-xs pb-8 leading-6">
            <p>주식회사 사일런트서비스 (Silent Service Co., Ltd.)</p>
            <p>사업자등록번호: 335-81-00808</p>
            <p>대표자: 정민수</p>
            <p>서울특별시 강남구 테헤란로39길 68, 4층</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 
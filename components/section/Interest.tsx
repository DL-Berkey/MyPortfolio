import SectionTitle from "./SectionTitle"

const interestList = [
    {
        title: "단순함과 구조에 대한 생각",
        content: [
            "단순함이 모여 복잡함을 만들고, 어떤 복잡함이 되는지는 구조에 달려 있다고 생각합니다.\nExpress 기반 프로젝트를 Next.js로 재구성하면서 몸소 체험했습니다.",
            "기존 코드는 작성할 당시에는 자세하고 좋은 코드였겠지만, 시간이 지나면서 필요 이상으로 많아진 코드는 부담으로 다가왔고 기능을 추가할수록 수정 범위도 커졌습니다. 다행히 Express의 라우터와 미들웨어 덕분에 최소한의 구분은 할 수 있었습니다. 이 구분을 기준으로 라우터와 미들웨어 그리고 나머지 코드들로 분리해서 Next.js로 옮길 부분과 재구성할 부분을 설계할 수 있었습니다.",
            "Next.js로 옮길 때 고려한 구조는 도메인 중심의 아키텍처였습니다. 도메인으로 여러 기능을 묶은 뒤에 컴포넌트가 뷰와 관련된 코드를 담당하게 하고 커스텀훅을 통해서 뷰와 관련이 없는 코드들을 분리하는 방법으로 재구성했습니다. 그 결과 새로운 기능이 추가될 때에는 새로운 도메인 폴더를 만들어서 구현하면 되었고, 기존 기능이 수정될 때에는 그 도메인 폴더만 살펴보면 되었습니다. 이때의 교훈으로 지금도 YAGNI, KISS 같은 원칙을 지켜 간단하게 만들되 단일책임원칙과 같은 것을 통해 구조를 명확하게 잡으려고 합니다.",
        ],
    },
    {
        title: "상태관리 라이브러리 구상",
        content: [
            "요즘 웹 어플리케이션은 클라이언트 상태보다 서버 상태가 더 많고, 클라이언트 상태의 상당수도 서버 상태에서 파생됩니다. 실무에서도 서버 상태는 TanStack Query에, 다수의 컴포넌트가 공유하는 상태는 Context에 맡겼습니다. 그러다 보니 Context provider를 선언하는 코드에 서버에서 온 데이터의 유무 확인, 그에 따른 초기값, 데이터를 다루는 함수가 함께 있게 되어서 문제가 발생할 때마다 수정을 고려해야 되는 부분이 너무 많았습니다. 이런 문제는 늘 존재했고 명쾌한 해답 없이 각자 알아서 풀어야 했습니다.",
            "그래서 프레임워크가 아키텍처를 제안하듯, 서버 상태와 거기서 파생되는 상태까지 하나의 일관된 구조로 담는 상태관리 라이브러리를 구상하고 있습니다. Store → Container → Unit 세 계층으로, 상위 계층만 하위 계층을 알고 하위 계층은 상위 계층을 모르는 구조를 통해 데이터의 흐름을 한 방향으로 유지합니다. 상태와 그 상태를 다루는 함수를 가진 Unit, 그런 Unit들을 파생 상태 Unit까지 포함해 묶어주는 Container, 그런 Container들을 프로젝트 단위로 묶어주는 Store로 구성됩니다. 이런 구조와 철학을 가지고 단 한 장의 문서로 모든 게 그려지는 라이브러리를 목표로 하고 있습니다.",
        ],
    },
]

const Interest = () => {
    return (
        <section id="interest" className="scroll-mt-24">
            <SectionTitle
                title="요즘 관심사"
                description="요즘 고민하고 있는 것들입니다."
            />
            <div className="mt-8 flex flex-col gap-10">
                {interestList.map((interest, idx) => (
                    <div key={idx} className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <span className="size-1.5 rounded-full bg-primary" />
                            <h3 className="text-lg font-bold">
                                {interest.title}
                            </h3>
                        </div>
                        <div className="flex flex-col gap-3 text-[15px] leading-relaxed whitespace-pre-line text-foreground">
                            {interest.content.map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Interest

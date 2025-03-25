import {IPolicy} from "@/data/policy/model/IPolicy";

export const PrivacyPolicyKO: IPolicy = {
    title: "개인정보 처리방침",
    subtitle: "",
    description: "",
    list: [
        {
            title: "소개",
            description: "CHORN은 귀하의 개인정보를 존중하며 개인정보 보호에 최선을 다하고 있습니다. 이 개인정보 처리방침은 CHORN 웹사이트 이용 시 어떻게 정보가 처리될 수 있는지, 특히 분석 목적을 위한 쿠키 사용에 관해 설명합니다.",
            isDetailed: false,
        },
        {
            title: "1. 수집하는 정보",
            description: "방문자가 분석 목적의 쿠키 사용에 동의하지 않는 한 개인정보는 직접적으로 수집되지 않습니다. 쿠키가 활성화되면 Google 애널리틱스와 같은 제3자 기술 전문 서비스를 통해 탐색 행동, 페이지 조회 및 사이트 상호작용과 같은 비개인 식별 정보가 수집될 수 있습니다.",
            isDetailed: false,
        },
        {
            title: "2. 쿠키",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "2.1 쿠키 사용",
                    description: "CHORN 웹사이트는 쿠키를 사용하지만, 쿠키 동의 모달을 통해 동의가 제공된 경우에만 사용합니다. 쿠키는 사용자의 기기에 저장되는 작은 텍스트 파일로, 사이트 트래픽을 분석하고 사용자 경험을 개선하는 데 도움이 됩니다."
                },
                {
                    title: "2.2 Google 애널리틱스",
                    description: "쿠키가 수락되면 Google 애널리틱스를 통해 웹사이트 사용에 관한 익명화된 데이터가 수집됩니다. 이 데이터에는 방문자 수, 탐색 행동 및 인기 페이지가 포함되어 웹사이트 성능을 최적화하는 데 도움이 됩니다. 개인 식별 정보는 수집되지 않습니다."
                },
                {
                    title: "2.3 귀하의 선택",
                    description: "쿠키 동의 모달을 통해 수락하거나 거부함으로써 쿠키 사용을 제어할 수 있습니다. 쿠키 설정은 브라우저를 통해서도 관리할 수 있습니다. 쿠키를 거부하면 특정 웹사이트 기능이 제한될 수 있습니다."
                }
            ]
        },
        {
            title: "3. 데이터 보안",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "3.1 보안 조치",
                    description: "쿠키를 통해 수집된 비개인 정보를 보호하고 CHORN 웹사이트의 무결성을 보장하기 위해 합리적인 보안 조치가 구현됩니다. 동의 없이는 개인 정보가 수집되거나 저장되지 않습니다."
                }
            ]
        },
        {
            title: "4. 제3자 링크",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "4.1 외부 링크",
                    description: "CHORN 웹사이트에는 제3자 웹사이트로의 링크가 포함될 수 있습니다. CHORN은 이러한 제3자 사이트의 개인정보 처리방침이나 콘텐츠에 대해 책임을 지지 않습니다. 방문하는 모든 외부 사이트의 개인정보 처리방침을 검토하는 것이 좋습니다."
                }
            ]
        },
        {
            title: "5. 개인정보 처리방침 변경",
            description: "",
            isDetailed: true,
            details: [
                {
                    title: "5.1 수정",
                    description: "이 개인정보 처리방침은 주기적으로 업데이트될 수 있습니다. 수정 사항은 이 페이지에 게시되는 즉시 효력이 발생합니다. 업데이트 후 웹사이트를 계속 사용하는 것은 수정된 개인정보 처리방침에 동의하는 것으로 간주됩니다."
                }
            ]
        }
    ],
};

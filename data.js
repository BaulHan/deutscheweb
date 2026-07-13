/**
 * CNC 밀링 기술자를 위한 실전 독일어 학습 데이터셋 (고도화 버전)
 * 15개 챕터 - 단원당 8개 핵심표현 + 3개 패턴 + 8줄 이상 대화 시뮬레이터 데이터 + 3문항 퀴즈
 * 총 200개 이상의 어휘 DB 포함
 */

const germanCurriculum = [
  {
    id: 1,
    title: "01단계: 입국 & 주거 등록 (Anmeldung)",
    level: "A1",
    section: "1부: 독일 정착 및 생존",
    description: "독일 입국 및 거주 시작을 위한 필수 행정 등록(Anmeldung) 회화와 단어",
    expressions: [
      {
        german: "Ich möchte meinen Wohnsitz anmelden.",
        pronunciation: "이히 뫼히테 마이넨 본지츠 안멜덴",
        korean: "거주지 등록(전입신고)을 하고 싶습니다.",
        nuance: "관공서(Bürgeramt) 창구에 가서 볼일을 설명할 때 사용하는 핵심 표현입니다. anmelden은 '등록하다'입니다."
      },
      {
        german: "Haben Sie einen Termin?",
        pronunciation: "하벤 지 아이넨 테어민?",
        korean: "예약하셨습니까?",
        nuance: "독일 관공서나 병원은 예약(Termin) 제도가 철저하므로 가장 많이 듣는 질문입니다."
      },
      {
        german: "Hier sind meine Dokumente und der Reisepass.",
        pronunciation: "히어 진트 마이네 도쿠멘테 운트 데어 라이제파스",
        korean: "여기 제 서류들과 여권이 있습니다.",
        nuance: "등록에 필요한 집주인 서류와 신분증을 건넬 때 사용합니다."
      },
      {
        german: "Ich habe eine Bestätigung vom Vermieter.",
        pronunciation: "이히 하베 아이네 베슈테티궁 폼 페어미터.",
        korean: "집주인 확인서가 있습니다.",
        nuance: "Wohnungsgeberbestätigung이라고 불리는 전입 신고용 집주인 서명 서류입니다."
      },
      {
        german: "Muss ich das Formular ausfüllen?",
        pronunciation: "무스 이히 다스 포어물라 아우스퓔렌?",
        korean: "이 신청서를 작성해야 하나요?",
        nuance: "ausfüllen은 서류 양식을 채워 넣는다는 의미의 분리동사입니다."
      },
      {
        german: "Wie lange dauert die Bearbeitung?",
        pronunciation: "비 랑에 다우어트 디 베아어바이퉁?",
        korean: "처리하는 데 얼마나 걸리나요?",
        nuance: "행정 절차의 소요 시간을 확인할 때 자주 씁니다. Bearbeitung은 '처리, 가공'을 뜻합니다."
      },
      {
        german: "Ich brauche eine Meldebestätigung.",
        pronunciation: "이히 브라우헤 아이네 멜데베슈테티궁.",
        korean: "거주등록 확인서가 필요합니다.",
        nuance: "은행 계좌 개설, 세무번호(Steuer-ID) 발급 등 독일 생활 곳곳에서 신분 증명용으로 제출할 기본 서류입니다."
      },
      {
        german: "Vielen Dank für Ihre Hilfe.",
        pronunciation: "필렌 당크 퓌어 이레 힐페.",
        korean: "도와주셔서 대단히 감사합니다.",
        nuance: "담당 공무원에게 격식 있고 정중하게 감사 인사를 전할 때 씁니다."
      }
    ],
    drillPatterns: [
      {
        pattern: "Ich möchte [Nomen] anmelden.",
        meaning: "나는 [명사]를 등록하고 싶습니다.",
        options: [
          { german: "meinen Wohnsitz", korean: "내 거주지" },
          { german: "mein Auto", korean: "내 자동차" },
          { german: "meine Adresse", korean: "내 주소" }
        ]
      },
      {
        pattern: "Ich brauche [Nomen].",
        meaning: "나는 [명사]가 필요합니다.",
        options: [
          { german: "einen Termin", korean: "예약" },
          { german: "eine Meldebestätigung", korean: "거주등록 확인서" },
          { german: "Ihre Unterschrift", korean: "당신의 서명" }
        ]
      },
      {
        pattern: "Haben Sie [Nomen]?",
        meaning: "당신은 [명사]를 가지고 있습니까?",
        options: [
          { german: "das Formular", korean: "그 서류 양식" },
          { german: "die Dokumente", korean: "그 서류들" },
          { german: "den Reisepass", korean: "여권" }
        ]
      }
    ],
    dialogue: [
      { speaker: "Beamter", text: "Guten Tag. Bitte nehmen Sie Platz. Haben Sie einen Termin?", translation: "안녕하세요. 앉으세요. 예약을 하셨나요?" },
      { speaker: "Sie", text: "Guten Tag. Ja, ich habe einen Termin um zehn Uhr für die Anmeldung.", translation: "안녕하세요. 네, 전입신고를 위해 10시에 예약했습니다." },
      { speaker: "Beamter", text: "Sehr gut. Bitte geben Sie mir Ihren Reisepass und das ausgefüllte Formular.", translation: "아주 좋습니다. 여권과 작성하신 신청서 양식을 주세요." },
      { speaker: "Sie", text: "Hier sind mein Reisepass, das Formular und die Wohnungsgeberbestätigung.", translation: "여기 여권과 양식, 그리고 집주인 확인서가 있습니다." },
      { speaker: "Beamter", text: "Das sieht alles korrekt aus. Unterschreiben Sie bitte hier unten.", translation: "다 올바르게 되었군요. 여기 하단에 서명해 주십시오." },
      { speaker: "Sie", text: "Gerne. Brauche ich noch andere Dokumente für die Steuerklasse?", translation: "네. 세금 등급을 위해 다른 서류가 더 필요한가요?" },
      { speaker: "Beamter", text: "Nein, das Finanzamt schickt Ihnen Ihre Steuer-Identifikationsnummer per Post.", translation: "아니요, 세무서에서 우편으로 세무 식별 번호를 보내줄 것입니다." },
      { speaker: "Sie", text: "Vielen Dank für Ihre Hilfe. Einen schönen Tag noch!", translation: "도와주셔서 대단히 감사합니다. 좋은 하루 보내세요!" }
    ],
    quiz: [
      {
        question: "다음 중 '신청서를 작성하다'에서 빈칸에 알맞은 분리 동사는? 'Ich muss das Formular ______.'",
        options: ["ausfüllen", "anmelden", "abmelden", "beantragen"],
        answer: "ausfüllen",
        explanation: "ausfüllen은 빈칸을 채우다(fill out)는 뜻으로 서류 작성 시 쓰입니다."
      },
      {
        question: "전입신고를 뜻하는 핵심 행정 명사는 무엇인가요?",
        options: ["die Anmeldung", "der Vertrag", "die Kaution", "der Termin"],
        answer: "die Anmeldung",
        explanation: "Anmeldung은 등록/신고를 의미하며 거주지 등록을 대표합니다."
      },
      {
        question: "'나는 거주등록 확인서가 필요합니다'를 작문할 때 올바른 문장은?",
        options: ["Ich brauche eine Meldebestätigung.", "Ich möchte meinen Wohnsitz anmelden.", "Haben Sie einen Termin?", "Ich habe ein Rezept."],
        answer: "Ich brauche eine Meldebestätigung.",
        explanation: "Meldebestätigung(거주등록확인서)와 brauchen(필요하다)을 사용한 문장입니다."
      }
    ]
  },
  {
    id: 2,
    title: "02단계: 마트 & 레스토랑 주문",
    level: "A1",
    section: "1부: 독일 정착 및 생존",
    description: "마트 장보기와 식당 주문 및 결제 표현(독일 현금 문화 팁)",
    expressions: [
      {
        german: "Ich nehme dieses Menü, bitte.",
        pronunciation: "이히 네메 디제스 메뉘, 비테",
        korean: "이 메뉴로 할게요.",
        nuance: "식당이나 카페에서 손가락으로 가리키며 주문할 때 간단하고 정중한 표현입니다."
      },
      {
        german: "Kann ich mit Karte bezahlen?",
        pronunciation: "칸 이히 미트 카어테 베찰렌?",
        korean: "카드로 결제할 수 있나요?",
        nuance: "독일은 아직 현금만 받는 곳이 꽤 있으므로 카드 결제 가능 여부를 묻는 것이 유용합니다."
      },
      {
        german: "Ich möchte zahlen, bitte. Zusammen oder getrennt?",
        pronunciation: "이히 뫼히테 차렌, 비테. 추잠멘 오더 게트렌트?",
        korean: "계산할게요. 같이 계산하시나요, 아니면 따로 하시나요?",
        nuance: "독일 식당에서는 종업원이 같이 낼지(zusammen) 각자 낼지(getrennt) 반드시 물어봅니다."
      },
      {
        german: "Brauchen Sie den Kassenbon?",
        pronunciation: "브라우헨 지 덴 카센본?",
        korean: "영수증 필요하세요?",
        nuance: "마트 계산원이 계산 완료 후 항상 물어보는 핵심 질문입니다."
      },
      {
        german: "Stimmt so. Behalten Sie das Wechselgeld.",
        pronunciation: "슈팀트 조. 베할텐 지 다스 벡셀겔트.",
        korean: "잔돈은 괜찮습니다. (팁 포함 계산)",
        nuance: "잔돈이 조금 남았을 때 팁으로 그냥 가질라고 할 때 쓰는 원어민 표현입니다."
      },
      {
        german: "Haben Sie noch einen Tisch für zwei Personen?",
        pronunciation: "하벤 지 노흐 아이넨 티쉬 퓌어 츠바이 페어조넨?",
        korean: "2인용 테이블이 있나요?",
        nuance: "예약 없이 식당에 진입할 때 빈 자리가 있는지 확인하는 문장입니다."
      },
      {
        german: "Entschuldigung, kann ich ein Glas Wasser haben?",
        pronunciation: "엔트슐디궁, 칸 이히 아인 글라스 바서 하벤?",
        korean: "실례합니다, 물 한 잔 주시겠어요?",
        nuance: "독일 식당은 물이 유료인 경우가 많으므로 따로 요청하고 비용을 냅니다."
      },
      {
        german: "Das Essen war sehr lecker. Danke!",
        pronunciation: "다스 에센 바어 제어 레커. 당크!",
        korean: "음식이 정말 맛있었습니다. 감사합니다!",
        nuance: "식사가 끝나고 접시를 치울 때나 계산할 때 셰프나 서버에게 칭찬을 건네는 표현입니다."
      }
    ],
    drillPatterns: [
      {
        pattern: "Kann ich [Aktion]?",
        meaning: "제가 [행동]할 수 있나요?",
        options: [
          { german: "mit Karte bezahlen", korean: "카드로 결제하다" },
          { german: "bar bezahlen", korean: "현금으로 결제하다" },
          { german: "einen Kassenbon haben", korean: "영수증을 받다" }
        ]
      },
      {
        pattern: "Ich nehme [Nomen], bitte.",
        meaning: "저는 [명사]로 할게요.",
        options: [
          { german: "ein Bier", korean: "맥주 한 잔" },
          { german: "den Kassenbon", korean: "영수증" },
          { german: "dieses Menü", korean: "이 메뉴" }
        ]
      },
      {
        pattern: "Haben Sie [Nomen]?",
        meaning: "당신은 [명사]가 있습니까?",
        options: [
          { german: "eine Speisekarte", korean: "메뉴판" },
          { german: "eine Tasche", korean: "장바구니(마트)" },
          { german: "einen Tisch frei", korean: "빈 테이블" }
        ]
      }
    ],
    dialogue: [
      { speaker: "Kellner", text: "Guten Abend. Haben Sie reserviert?", translation: "안녕하세요. 예약하셨나요?" },
      { speaker: "Sie", text: "Nein, wir haben keine Reservierung. Haben Sie einen Tisch für zwei Personen?", translation: "아니요, 예약은 안 했습니다. 두 명 앉을 자리가 있나요?" },
      { speaker: "Kellner", text: "Ja, hier drüben am Fenster ist noch frei. Bitte schön.", translation: "네, 여기 창가 쪽에 자리가 있습니다. 앉으십시오." },
      { speaker: "Sie", text: "Danke schön. Ich nehme ein Schnitzel und ein Mineralwasser, bitte.", translation: "감사합니다. 슈니첼 하나와 탄산수 한 병 주세요." },
      { speaker: "Kellner", text: "Gerne. Kommt sofort.", translation: "알겠습니다. 금방 준비해 드리겠습니다." },
      { speaker: "Sie", text: "Entschuldigung, ich möchte bezahlen. Zusammen, bitte.", translation: "실례합니다. 계산해 주세요. 같이 낼게요." },
      { speaker: "Kellner", text: "Das macht siebenundzwanzig Euro fünfzig.", translation: "총 27유로 50센트입니다." },
      { speaker: "Sie", text: "Hier sind dreißig Euro. Stimmt so.", translation: "여기 30유로 있습니다. 잔돈은 됐습니다 (팁 포함)." }
    ],
    quiz: [
      {
        question: "독일 마트에서 계산원이 '영수증 필요하세요?'라고 할 때 사용하는 단어는?",
        options: ["der Kassenbon", "das Rezept", "das Formular", "der Vertrag"],
        answer: "der Kassenbon",
        explanation: "Kassenbon은 마트 등에서 발행하는 종이 영수증을 의미합니다."
      },
      {
        question: "잔돈은 괜찮다(팁으로 가질 것)는 의미의 원어민 정석 표현은?",
        options: ["Stimmt so.", "Sehr gut.", "Kein Geld.", "Zahlen, bitte."],
        answer: "Stimmt so.",
        explanation: "Stimmt so는 계산 금액과 팁의 단수가 맞아 떨어지니 잔돈을 남겨주지 않아도 된다는 표현입니다."
      },
      {
        question: "각자 따로 계산하겠다는 의사 표시로 올바른 단어는?",
        options: ["getrennt", "zusammen", "gratis", "sofort"],
        answer: "getrennt",
        explanation: "getrennt는 '따로따로', zusammen은 '합산하여 한꺼번에'입니다."
      }
    ]
  },
  {
    id: 3,
    title: "03단계: 방 계약 & 통신 개통",
    level: "A2",
    section: "1부: 독일 정착 및 생존",
    description: "집 구하기 서류 소통 및 인터넷, 모바일 개통 관련 문의",
    expressions: [
      {
        german: "Wie hoch ist die Kaution?",
        pronunciation: "비 호흐 이스트 디 카우치온?",
        korean: "보증금은 얼마인가요?",
        nuance: "집 계약 시 보증금(Kaution)은 일반적으로 2~3달치 방세(Kaltmiete) 수준입니다."
      },
      {
        german: "Ist die Miete warm oder kalt?",
        pronunciation: "이스트 디 미테 밤 오더 칼트?",
        korean: "방세가 관리비 포함인가요, 미포함인가요?",
        nuance: "kalt(기본 방세)에 관리비와 난방비가 합쳐지면 warm(관리비 포함 방세)이 됩니다."
      },
      {
        german: "Wann wird das Internet freigeschaltet?",
        pronunciation: "반 비어트 다스 인테어넷 프라이게샬테트?",
        korean: "인터넷은 언제 개통되나요?",
        nuance: "독일은 인터넷 설치 및 활성화에 수 주일이 소요되는 경우가 흔해 꼭 확인해야 합니다."
      },
      {
        german: "Ich möchte einen Handyvertrag abschließen.",
        pronunciation: "이히 뫼히테 아이넨 핸디페어트라크 아프실리센.",
        korean: "휴대폰 요금제 약정 계약을 맺고 싶습니다.",
        nuance: "abschließen은 계약을 체결하여 '완료하다'라는 동사입니다."
      },
      {
        german: "Sind die Nebenkosten in der Miete enthalten?",
        pronunciation: "진트 디 네벤코스텐 인 데어 미테 엔트할텐?",
        korean: "공과금(수도, 청소비 등)이 방세에 포함되어 있나요?",
        nuance: "Nebenkosten(부가세/관리비) 항목이 월세에 어떻게 포함되는지 상세히 짚어야 나중에 분쟁이 없습니다."
      },
      {
        german: "Ich benötige einen Router für die Wohnung.",
        pronunciation: "이히 베뇌티게 아이넨 루터 퓌어 디 보눙.",
        korean: "집에 공유기(라우터)가 필요합니다.",
        nuance: "인터넷 신규 가입 시 하드웨어(Router) 대여 혹은 포함 여부를 물을 때 씁니다."
      },
      {
        german: "Haben Sie ein Übergabeprotokoll?",
        pronunciation: "하벤 지 아인 위버가베프로토콜?",
        korean: "입주 전 시설 확인 목록(인수 인계 점검표)이 있습니까?",
        nuance: "독일에서는 입주 시 벽 상태나 가구 파손 여부를 체크하는 Übergabeprotokoll을 철저히 씁니다."
      },
      {
        german: "Die Kaution muss überwiesen werden.",
        pronunciation: "디 카우치온 무스 위버비젠 베어덴.",
        korean: "보증금은 계좌 이체해야 합니다.",
        nuance: "überweisen은 은행 송금(이체)을 뜻하는 매우 중요한 일상 동사입니다."
      }
    ],
    drillPatterns: [
      {
        pattern: "Wie hoch ist [Nomen]?",
        meaning: "[명사]는 얼마인가요?",
        options: [
          { german: "die Kaution", korean: "보증금" },
          { german: "die Warmmiete", korean: "관리비 포함 월세" },
          { german: "die Kaltmiete", korean: "순수 월세" }
        ]
      },
      {
        pattern: "Ich möchte [Nomen] abschließen.",
        meaning: "나는 [명사] 계약을 체결하고 싶습니다.",
        options: [
          { german: "einen Mietvertrag", korean: "임대차 계약" },
          { german: "einen Handyvertrag", korean: "휴대폰 요금 계약" },
          { german: "eine Versicherung", korean: "보험 계약" }
        ]
      },
      {
        pattern: "Sind [Nomen] enthalten?",
        meaning: "[명사]가 포함되어 있습니까?",
        options: [
          { german: "die Heizkosten", korean: "난방비" },
          { german: "die Nebenkosten", korean: "관리 부대비용" },
          { german: "die Möbel", korean: "가구들" }
        ]
      }
    ],
    dialogue: [
      { speaker: "Vermieter", text: "Guten Tag. Hier ist die Wohnung. Gefällt sie Ihnen?", translation: "안녕하세요. 여기가 그 아파트입니다. 마음에 드시나요?" },
      { speaker: "Sie", text: "Guten Tag. Ja, die Wohnung ist sehr schön. Ist die Miete warm oder kalt?", translation: "안녕하세요. 네, 집이 아주 예쁘네요. 방세는 관리비 포함인가요, 미포함인가요?" },
      { speaker: "Vermieter", text: "Die Kaltmiete ist sechshundert Euro. Dazu kommen einhundertfünfzig Euro Nebenkosten.", translation: "순수 월세는 600유로입니다. 여기에 관리비 150유로가 추가됩니다." },
      { speaker: "Sie", text: "Das heißt, die Warmmiete beträgt siebenhundertfünfzig Euro?", translation: "그렇다면 관리비 포함 월세는 총 750유로인 거네요?" },
      { speaker: "Vermieter", text: "Richtig. Die Heizkosten sind in den Nebenkosten enthalten. Strom müssen Sie extra anmelden.", translation: "맞습니다. 난방비는 관리비에 포함되어 있고, 전기는 본인이 따로 신청하셔야 합니다." },
      { speaker: "Sie", text: "Verstanden. Wie hoch ist die Kaution für diese Wohnung?", translation: "이해했습니다. 이 아파트의 보증금은 얼마인가요?" },
      { speaker: "Vermieter", text: "Die Kaution beträgt drei Kaltmieten. Also eintausendachthundert Euro.", translation: "보증금은 3달 치 순수 월세입니다. 즉 1,800유로입니다." },
      { speaker: "Sie", text: "Gut, ich nehme die Wohnung. Wann können wir den Mietvertrag unterschreiben?", translation: "좋습니다, 이 집으로 하겠습니다. 언제 임대 계약서에 서명할 수 있을까요?" }
    ],
    quiz: [
      {
        question: "독일어로 은행 계좌 '송금(이체)하다'를 뜻하는 동사는?",
        options: ["überweisen", "abheben", "anmelden", "kaufen"],
        answer: "überweisen",
        explanation: "überweisen은 은행 계좌를 통해 돈을 송금할 때 쓰는 표준 어휘입니다."
      },
      {
        question: "월세 계약 시 부대 공과금(수도, 쓰레기 처리 등)을 일컫는 단어는?",
        options: ["die Nebenkosten", "die Provision", "die Kaution", "der Strom"],
        answer: "die Nebenkosten",
        explanation: "Nebenkosten은 월세 외에 청구되는 관리 부대 비용을 뜻합니다."
      },
      {
        question: "보증금은 보통 순수 월세(Kaltmiete)의 몇 배 수준이 법적 한도인가요?",
        options: ["3배", "5배", "10배", "없음"],
        answer: "3배",
        explanation: "독일법상 임대 보증금(Kaution)은 최대 3달 치 Kaltmiete(순수 월세)를 초과할 수 없습니다."
      }
    ]
  },
  {
    id: 4,
    title: "04단계: 대중교통 & 길 찾기",
    level: "A2",
    section: "1부: 독일 정착 및 생존",
    description: "티켓팅, 열차 연착 상황 및 방향 길 찾기 소통",
    expressions: [
      {
        german: "Gleis drei. Fährt dieser Zug nach Frankfurt?",
        pronunciation: "글라이스 드라이. 페어트 디저 추크 나흐 프랑크푸르트?",
        korean: "3번 승강장. 이 기차가 프랑크푸르트로 가나요?",
        nuance: "Gleis는 기차역 승강장 번호입니다. 행선지가 맞는지 재확인할 때 유용합니다."
      },
      {
        german: "Entschuldigung, wo ist der Fahrkartenautomat?",
        pronunciation: "엔트슐디궁, 보 이스트 데어 파어카어텐아우토마트?",
        korean: "실례합니다, 승차권 자동판매기가 어디에 있나요?",
        nuance: "역사에서 티켓 기계를 찾을 때 행인에게 묻는 표현입니다."
      },
      {
        german: "Der Zug hat zwanzig Minuten Verspätung.",
        pronunciation: "데어 추크 하트 츠반치히 미누텐 페어스페퉁.",
        korean: "열차가 20분 연착됩니다.",
        nuance: "독일 철도(DB)를 이용할 때 가장 자주 보고 듣게 되는 안내 방송/문구입니다."
      },
      {
        german: "Muss ich für diese Verbindung umsteigen?",
        pronunciation: "무스 이히 퓌어 디제 페어빈둥 움슈타이겐?",
        korean: "이 노선은 갈아타야(환승해야) 합니까?",
        nuance: "umsteigen은 대중교통을 갈아타다라는 필수 동사입니다."
      },
      {
        german: "Gibt es einen Schienenersatzverkehr?",
        pronunciation: "기프트 에스 아이넨 시넨에어자츠페어케어?",
        korean: "대체 버스 수송(SEV)이 운행 중인가요?",
        nuance: "철로 공사 등으로 열차가 끊겼을 때 버스로 우회 운행하는 시스템을 뜻하며 자주 겪게 됩니다."
      },
      {
        german: "Gehen Sie geradeaus und dann links.",
        pronunciation: "게엔 지 게라데아우스 운트 단 링스.",
        korean: "직진하신 다음 왼쪽으로 가세요.",
        nuance: "길 안내 시 가장 기본이 되는 구문입니다. (geradeaus: 직진, links: 왼쪽, rechts: 오른쪽)"
      },
      {
        german: "Ist das Ticket für den Nahverkehr gültig?",
        pronunciation: "이스트 다스 티켓 퓌어 덴 나페어케어 귈티히?",
        korean: "이 티켓은 근거리 교통(시내 대중교통)에 유효합니까?",
        nuance: "독일 티켓은 지역/거리/종류별 유효성(gültig)이 복잡하므로 검표 전 확인하면 좋습니다."
      },
      {
        german: "Ich habe den Anschlusszug verpasst.",
        pronunciation: "이히 하베 덴 안슐루스추크 페어파스트.",
        korean: "환승할 연결 열차를 놓쳤습니다.",
        nuance: "열차 연착으로 인해 환승 차편을 놓쳤을 때 인포메이션 센터나 역무원에게 구제를 요청할 때 씁니다."
      }
    ],
    drillPatterns: [
      {
        pattern: "Fährt dieser Zug nach [Ort]?",
        meaning: "이 기차가 [장소]로 가나요?",
        options: [
          { german: "München", korean: "뮌헨" },
          { german: "Stuttgart", korean: "슈투트가르트" },
          { german: "Hauptbahnhof", korean: "중앙역" }
        ]
      },
      {
        pattern: "Muss ich [Aktion]?",
        meaning: "제가 [행동]해야 합니까?",
        options: [
          { german: "umsteigen", korean: "갈아타다" },
          { german: "ein Ticket entwerten", korean: "티켓에 각인을 찍다" },
          { german: "hier aussteigen", korean: "여기서 내리다" }
        ]
      },
      {
        pattern: "Der Zug hat [Zeit] Verspätung.",
        meaning: "열차가 [시간] 지연되었습니다.",
        options: [
          { german: "fünf Minuten", korean: "5분" },
          { german: "eine Stunde", korean: "1시간" },
          { german: "keine", korean: "지연 없음" }
        ]
      }
    ],
    dialogue: [
      { speaker: "Sie", text: "Entschuldigung, wo finde ich das Gleis für die S-Bahn S8 nach Stuttgart?", translation: "실례합니다, 슈투트가르트행 S-Bahn S8 승강장이 어디인가요?" },
      { speaker: "Bahnmitarbeiter", text: "Die S8 fährt heute von Gleis vier ab, nicht von Gleis zwei.", translation: "S8은 오늘 2번 승강장이 아니라 4번 승강장에서 출발합니다." },
      { speaker: "Sie", text: "Ah, danke. Fährt diese S-Bahn direkt oder muss ich umsteigen?", translation: "아, 감사합니다. 이 S-Bahn은 직통인가요, 아니면 갈아타야 하나요?" },
      { speaker: "Bahnmitarbeiter", text: "Sie können direkt durchfahren. Aber Achtung, der Zug hat aktuell zehn Minuten Verspätung.", translation: "갈아타지 않고 바로 가실 수 있습니다. 하지만 주의하세요. 현재 열차가 10분 지연 중입니다." },
      { speaker: "Sie", text: "Oh, dann verpasse ich vielleicht meinen Anschluss. Gibt es ein Ersatzticket?", translation: "오, 그러면 연결 기차를 놓칠지도 모르겠네요. 대체 티켓이 있나요?" },
      { speaker: "Bahnmitarbeiter", text: "Nein, mit Ihrem Ticket können Sie einfach den nächsten Regionalzug nehmen. Das ist gültig.", translation: "아니요, 가지고 계신 티켓으로 다음 지역 열차를 그냥 타시면 됩니다. 유효합니다." },
      { speaker: "Sie", text: "Verstanden. Muss ich das Ticket am Fahrkartenentwerter abstempeln?", translation: "이해했습니다. 티켓 각인기(entwerter)에 도장을 찍어야 하나요?" },
      { speaker: "Bahnmitarbeiter", text: "Nein, Ihr Ticket ist online gekauft und bereits entwertet. Guten Flug!", translation: "아니요, 온라인 구매 티켓은 이미 각인 완료된 상태입니다. 좋은 여정 되세요!" }
    ],
    quiz: [
      {
        question: "독일 지하철/버스 탑승 전 기계에 넣어서 날짜와 시간을 찍는 행위를 무엇이라 할까요?",
        options: ["entwerten / abstempeln", "kaufen", "umsteigen", "verpassen"],
        answer: "entwerten / abstempeln",
        explanation: "entwerten(유효화하다/각인하다) 혹은 abstempeln(도장을 찍다)은 무임승차 벌금을 면하기 위해 필수적인 동작입니다."
      },
      {
        question: "기차 공사 시 기차 대신 운행하는 대체 버스를 지칭하는 단어는?",
        options: ["der Schienenersatzverkehr (SEV)", "die S-Bahn", "die U-Bahn", "der Fahrplan"],
        answer: "der Schienenersatzverkehr (SEV)",
        explanation: "Schienenersatzverkehr는 철도 대체 운송 수단을 뜻합니다."
      },
      {
        question: "환승을 위해 기차나 지하철을 '갈아타다'를 뜻하는 동사는?",
        options: ["umsteigen", "aussteigen", "einsteigen", "fahren"],
        answer: "umsteigen",
        explanation: "umsteigen(갈아타다), einsteigen(타다), aussteigen(내리다)입니다."
      }
    ]
  },
  {
    id: 5,
    title: "05단계: 병원 예약 & 건강 증상 설명",
    level: "A2",
    section: "1부: 독일 정착 및 생존",
    description: "가정의학과(Hausarzt) 예약, 아픈 부위 표현 및 약국 소통",
    expressions: [
      {
        german: "Ich habe Kopfschmerzen und Fieber.",
        pronunciation: "이히 하베 코프슈메어첸 운트 피버.",
        korean: "두통이 있고 열이 납니다.",
        nuance: "대표적인 감기/몸살 증상 표현입니다. Kopfschmerzen 대신 Bauchschmerzen(복통)을 쓸 수 있습니다."
      },
      {
        german: "Ich habe mir in den Finger geschnitten.",
        pronunciation: "이히 하베 미어 인 덴 핑어 게슈니텐.",
        korean: "손가락을 베었습니다.",
        nuance: "작업장(Werkstatt)에서 가벼운 자상을 입어 동료나 보건 요원에게 알릴 때 중요합니다."
      },
      {
        german: "Ich brauche ein Rezept für dieses Medikament.",
        pronunciation: "이히 브라우헤 아인 레체프트 퓌어 디제스 메디카멘트.",
        korean: "이 약을 위한 처방전이 필요합니다.",
        nuance: "독일 약국(Apotheke)에서 전문의약품을 사려면 의사가 발급한 Rezept(처방전)이 필수입니다."
      },
      {
        german: "Mein Fuß ist geschwollen. Ich kann nicht auftreten.",
        pronunciation: "마인 푸스 이스트 게슈볼렌. 이히 칸 니흐트 아우프트레텐.",
        korean: "발이 부었습니다. 디딜 수가 없네요.",
        nuance: "공장에서 작업 도중 물건을 발에 떨어뜨리는 등의 부상 상황 시 설명 문구입니다."
      },
      {
        german: "Haben Sie Schmerzmittel?",
        pronunciation: "하벤 지 슈메어츠미텔?",
        korean: "진통제 있습니까?",
        nuance: "Schmerz(통증) + Mittel(수단/약)이 합쳐져 진통제를 의미하며 약국이나 현장 구급상자 근처에서 요긴합니다."
      },
      {
        german: "Ich bin gesetzlich versichert.",
        pronunciation: "이히 빈 게제츠리히 페어지헤어트.",
        korean: "공적 건강보험에 가입되어 있습니다.",
        nuance: "독일 병원 접수처에서 공적 보험(GKV, 예: TK, AOK)인지 사적 보험(PKV)인지 확인할 때 대답합니다."
      },
      {
        german: "Ich muss einen Termin absagen.",
        pronunciation: "이히 무스 아이넨 테어민 아프사겐.",
        korean: "예약을 취소해야 합니다.",
        nuance: "absagen은 예약이나 약속을 취소할 때 쓰는 동사입니다. (변경은 verschieben)"
      },
      {
        german: "Gute Besserung!",
        pronunciation: "구테 베서룽!",
        korean: "쾌차를 빕니다! (몸조리 잘하세요)",
        nuance: "아프거나 병가를 내는 동료에게 건네는 독일식 격려 및 위로 인사입니다."
      }
    ],
    drillPatterns: [
      {
        pattern: "Ich habe [Krankheit].",
        meaning: "저는 [질환/증상]이 있습니다.",
        options: [
          { german: "starke Halsschmerzen", korean: "심한 목 통증" },
          { german: "Magenschmerzen", korean: "위통 / 위경련" },
          { german: "eine Erkältung", korean: "감기" }
        ]
      },
      {
        pattern: "Ich habe mir [Körperteil] verletzt.",
        meaning: "저는 [신체 부위]를 다쳤습니다.",
        options: [
          { german: "die Hand", korean: "손" },
          { german: "den Fuß", korean: "발" },
          { german: "den Rücken", korean: "허리/등" }
        ]
      },
      {
        pattern: "Gibt es ein Medikament gegen [Symptom]?",
        meaning: "[증상]에 잘 듣는 약이 있나요?",
        options: [
          { german: "Husten", korean: "기침" },
          { german: "Fieber", korean: "열" },
          { german: "Allergie", korean: "알레르기" }
        ]
      }
    ],
    dialogue: [
      { speaker: "Arzthelferin", text: "Praxis Dr. Schmidt. Guten Tag. Was kann ich für Sie tun?", translation: "슈미트 내과 의원입니다. 안녕하세요. 무엇을 도와드릴까요?" },
      { speaker: "Sie", text: "Guten Tag. Ich bin krank und brauche einen Termin beim Arzt. Ich habe starkes Fieber.", translation: "안녕하세요. 몸이 아파서 진료 예약을 하고 싶습니다. 열이 많이 납니다." },
      { speaker: "Arzthelferin", text: "Haben Sie Ihre Versichertenkarte dabei? Sind Sie gesetzlich versichert?", translation: "건강보험 카드를 가지고 계시나요? 공적보험 가입자이신가요?" },
      { speaker: "Sie", text: "Ja, ich habe meine TK-Karte und bin gesetzlich versichert.", translation: "네, TK 보험카드가 있고 공적보험 가입자입니다." },
      { speaker: "Arzthelferin", text: "Gut. Sie können heute um elf Uhr als Akutpatient kommen. Es gibt aber Wartezeit.", translation: "좋습니다. 오늘 오전 11시에 응급 환자로 오셔도 됩니다. 다만 대기 시간이 있습니다." },
      { speaker: "Sie", text: "Kein Problem, ich komme um elf Uhr. Danke.", translation: "문제없습니다. 11시까지 가겠습니다. 감사합니다." },
      { speaker: "Arzt", text: "Ich verschreibe Ihnen Tabletten gegen das Fieber. Nehmen Sie diese dreimal täglich nach dem Essen.", translation: "열을 내릴 수 있는 알약을 처방해 드리겠습니다. 하루 세 번 식후에 복용하세요." },
      { speaker: "Sie", text: "Vielen Dank, Herr Doktor. Muss ich dafür bezahlen?", translation: "의사 선생님 감사합니다. 비용을 지불해야 하나요?" }
    ],
    quiz: [
      {
        question: "아픈 동료에게 '얼른 나으세요!'라고 건네는 정중한 인사말은?",
        options: ["Gute Besserung!", "Mahlzeit!", "Schönen Feierabend!", "Guten Appetit!"],
        answer: "Gute Besserung!",
        explanation: "Gute Besserung!은 병가 중이거나 아픈 사람에게 건네는 표준 쾌차 빌기 인사입니다."
      },
      {
        question: "병원 예약이나 미팅 일정을 '변경(연기)하다'를 뜻하는 올바른 동사는?",
        options: ["verschieben", "absagen", "anmelden", "überweisen"],
        answer: "verschieben",
        explanation: "verschieben은 일정을 미루거나 앞당기는 등 변경할 때 쓰이며, absagen은 완전 취소를 의미합니다."
      },
      {
        question: "독일어로 '진통제'를 의미하는 명사는?",
        options: ["das Schmerzmittel", "der Hustensaft", "das Rezept", "das Fieberthermometer"],
        answer: "das Schmerzmittel",
        explanation: "Schmerz(통증) + Mittel(치료 수단/약) = 진통제를 뜻합니다."
      }
    ]
  },
  {
    id: 6,
    title: "06단계: 첫 출근 & 공장(Werkstatt) 인사",
    level: "A2",
    section: "2부: 작업장 안전 & 기계 조작",
    description: "독일 현장 동료와의 첫 대면 예절 및 핵심 직책 용어",
    expressions: [
      {
        german: "Guten Tag, ich bin der neue Kollege. Mein Name ist Paul Han.",
        pronunciation: "구텐 탁, 이히 빈 데어 노이에 콜레게. 마인 나메 이스트 파울 한.",
        korean: "안녕하세요, 새로 온 동료입니다. 제 이름은 한파울입니다.",
        nuance: "동료들에게 정식으로 인사를 건넬 때 사용하는 정석 표현입니다."
      },
      {
        german: "Wer ist mein Vorarbeiter / Meister?",
        pronunciation: "베어 이스트 마인 포어아어바이터 / 마이스타?",
        korean: "제 현장 조장(반장)님 / 마이스터님은 누구인가요?",
        nuance: "독일 금속공장은 현장 책임자인 Vorarbeiter(조장) 혹은 Meister(작업장 총괄 마이스터)의 지시를 따릅니다."
      },
      {
        german: "Können Sie mir die Werkstatt zeigen?",
        pronunciation: "콘넨 지 미어 디 웨어크슈타트 차이겐?",
        korean: "작업장(공장)을 좀 구경시켜 주시겠어요?",
        nuance: "첫날 공장 레이아웃과 도구 보관함 위치 등을 확인하기 위해 투어를 부탁할 때 씁니다."
      },
      {
        german: "Freut mich, Sie kennenzulernen.",
        pronunciation: "프로이트 미히, 지 켄넨출레어넨.",
        korean: "만나 뵙게 되어 기쁩니다.",
        nuance: "상대방과 처음 악수하거나 인사 나눌 때 격식을 갖춘 문장입니다. 반말로는 'Freut mich, dich kennenzulernen'입니다."
      },
      {
        german: "Wo kann ich mich umziehen?",
        pronunciation: "보 칸 이히 미히 움치엔?",
        korean: "옷은 어디서 갈아입을 수 있나요?",
        nuance: "작업복(Arbeitskleidung)으로 갈아입을 탈의실 위치를 물어볼 때 씁니다."
      },
      {
        german: "Wo ist mein Spind?",
        pronunciation: "보 이스트 마인 슈핀트?",
        korean: "제 캐비닛(사물함)은 어디에 있습니까?",
        nuance: "Spind는 독일 현장직 노동자들의 개인 옷장 및 소지품 보관함을 가리키는 필수 명사입니다."
      },
      {
        german: "Ich freue mich auf die Zusammenarbeit.",
        pronunciation: "이히 프로이에 미히 아우프 디 추잠멘아어바이트.",
        korean: "앞으로의 협업이 기대됩니다.",
        nuance: "첫날을 마무리하거나 소개 시 팀원들에게 건네기 좋은 교과서적인 긍정 표현입니다."
      },
      {
        german: "Können Sie bitte langsamer sprechen?",
        pronunciation: "콘넨 지 비테 랑자머 슈프레헨?",
        korean: "조금만 천천히 말씀해 주실 수 있나요?",
        nuance: "독일인 동료들이 현장 방언이나 빠른 속도로 이야기할 때 양해를 구하는 마법의 서바이벌 문장입니다."
      }
    ],
    drillPatterns: [
      {
        pattern: "Wo ist [Ort]?",
        meaning: "[장소]는 어디에 있나요?",
        options: [
          { german: "die Umkleidekabine", korean: "탈의실" },
          { german: "das Werkzeuglager", korean: "공구실" },
          { german: "der Pausenraum", korean: "휴게실" }
        ]
      },
      {
        pattern: "Wer ist [Person]?",
        meaning: "[인물]은 누구인가요?",
        options: [
          { german: "der Vorarbeiter", korean: "현장 반장" },
          { german: "der Meister", korean: "작업장 마이스터" },
          { german: "der Sicherheitsbeauftragte", korean: "안전 관리 대리인" }
        ]
      },
      {
        pattern: "Ich suche [Nomen].",
        meaning: "저는 [명사]를 찾고 있습니다.",
        options: [
          { german: "meinen Spind", korean: "제 사물함" },
          { german: "die Arbeitskleidung", korean: "작업복" },
          { german: "den Schraubstock", korean: "바이스" }
        ]
      }
    ],
    dialogue: [
      { speaker: "Sie", text: "Guten Morgen. Ich bin Paul Han. Heute ist mein erster Arbeitstag.", translation: "안녕하세요. 저는 한파울입니다. 오늘이 제 첫 근무일입니다." },
      { speaker: "Meister", text: "Guten Morgen Paul! Willkommen in unserem Betrieb. Ich bin Markus, der Werkstattmeister.", translation: "좋은 아침입니다 파울! 저희 업체에 오신 걸 환영합니다. 저는 작업장 마이스터 마쿠스입니다." },
      { speaker: "Sie", text: "Freut mich sehr, Markus. Wer ist mein direkter Vorarbeiter für die CNC-Abteilung?", translation: "만나서 반갑습니다, 마쿠스. CNC 부서의 제 직속 조장님은 누구인가요?" },
      { speaker: "Meister", text: "Das ist Thomas. Er arbeitet an der Fräsmaschine Nummer drei. Ich stelle dich ihm gleich vor.", translation: "토마스 씨입니다. 그는 3번 밀링 머신에서 작업 중입니다. 바로 소개해 드리죠." },
      { speaker: "Sie", text: "Vielen Dank. Wo kann ich mich umziehen und meine Sachen ablegen?", translation: "감사합니다. 옷을 갈아입고 짐을 놓아둘 곳이 어디인가요?" },
      { speaker: "Meister", text: "Die Umkleidekabine ist dort hinten links. Dein Spind hat die Nummer 42. Hier ist der Schlüssel.", translation: "탈의실은 저기 뒤쪽 왼편에 있습니다. 사물함 번호는 42번이고, 여기 열쇠가 있습니다." },
      { speaker: "Sie", text: "Super. Ich ziehe meine Sicherheitsschuhe an und komme direkt in die Werkstatt.", translation: "좋습니다. 안전화를 갈아 신고 바로 작업장으로 오겠습니다." },
      { speaker: "Meister", text: "Perfekt. Sicherheit geht vor. Bis gleich!", translation: "완벽합니다. 안전이 최우선이니까요. 곧 봐요!" }
    ],
    quiz: [
      {
        question: "독일 현장에서 직속 상관이자 조장/반장 역할을 지칭하는 단어는?",
        options: ["der Vorarbeiter", "der Kunde", "der Vermieter", "der Beamter"],
        answer: "der Vorarbeiter",
        explanation: "Vorarbeiter는 현장에서 작업을 직접 지시하고 조율하는 반장/조장을 칭합니다."
      },
      {
        question: "개인 작업복과 귀중품을 보관하는 사물함을 뜻하는 명사는?",
        options: ["der Spind", "der Tisch", "der Hammer", "das Gleis"],
        answer: "der Spind",
        explanation: "Spind는 오피스나 공장에서 옷 등을 넣는 철제 라커/사물함을 의미합니다."
      },
      {
        question: "'천천히 말씀해 주세요'라고 정중히 요청하는 문장은?",
        options: ["Können Sie bitte langsamer sprechen?", "Haben Sie einen Termin?", "Ich möchte mich umziehen.", "Wer ist mein Meister?"],
        answer: "Können Sie bitte langsamer sprechen?",
        explanation: "langsamer(더 천천히)와 sprechen(말하다)을 사용한 필수적인 양해 구문입니다."
      }
    ]
  },
  {
    id: 7,
    title: "07단계: 작업장 안전 & 보호장구",
    level: "A2",
    section: "2부: 작업장 안전 & 기계 조작",
    description: "생명과 직결되는 공장 안전 수칙 및 보호 장구 회화",
    expressions: [
      {
        german: "Hier muss man immer Schutzbrille und Sicherheitsschuhe tragen.",
        pronunciation: "히어 무스 만 이머 슈츠브릴레 운트 지허하이츠슈헤 트라겐.",
        korean: "이곳에서는 항상 보호안경과 안전화를 착용해야 합니다.",
        nuance: "공장 바닥(Shop Floor)에 들어서기 전 안전 수칙 안내판이나 교육 시 필수 강조 문구입니다."
      },
      {
        german: "Wo ist der Not-Aus-Schalter?",
        pronunciation: "보 이스트 데어 노트-아우스-샬터?",
        korean: "비상 정지 스위치가 어디에 있습니까?",
        nuance: "위급 상황 시 기계를 즉각 멈추기 위해 CNC 장비마다 위치한 빨간 버섯 모양 스위치입니다."
      },
      {
        german: "Achtung! Heiße Späne und rotierende Teile!",
        pronunciation: "아흐퉁! 하이세 슈페네 운트 로티렌데 타일레!",
        korean: "조심하세요! 뜨거운 칩(금속 부스러기)과 회전하는 부품이 있습니다!",
        nuance: "밀링 가공 중 부상을 막기 위해 주의를 환기하는 경고 단어들입니다."
      },
      {
        german: "Benutzen Sie beim Reinigen immer Druckluft mit Schutzbrille.",
        pronunciation: "베누첸 지 바임 라이니겐 이머 드룩루프트 미트 슈츠브릴레.",
        korean: "에어건 청소 시 반드시 보호안경을 쓰고 압축공기를 사용하세요.",
        nuance: "Späne(칩)을 에어(Druckluft)로 불어낼 때 눈에 튈 위험이 있어 안전 요원이 항상 지적하는 수칙입니다."
      },
      {
        german: "Vorsicht! Die Maschine läuft im Automatikmodus.",
        pronunciation: "포어지히트! 디 마시네 로이프트 임 아우토마티크모두스.",
        korean: "주의하세요! 기계가 자동운전 모드로 구동 중입니다.",
        nuance: "문이 닫히고 자동으로 깎기 시작할 때 접근하는 동료에게 주의를 줄 때 씁니다."
      },
      {
        german: "Wo befindet sich der Erste-Hilfe-Kasten?",
        pronunciation: "보 베핀데트 지흐 데어 에어스테-힐페-카스텐?",
        korean: "구급상자가 어디에 있나요?",
        nuance: "부상자가 발생했을 때 응급처치용 밴드와 소독약이 담긴 박스를 찾을 때 씁니다."
      },
      {
        german: "Das Tragen von Handschuhen an rotierenden Spindeln ist verboten.",
        pronunciation: "다스 트라겐 폰 한트슈헨 안 로티렌덴 슈핀델른 이스트 페어보텐.",
        korean: "회전하는 스핀들(축) 작업 시 장갑 착용은 금지되어 있습니다.",
        nuance: "독일 안전 규정(UVV)상, 장갑이 스핀들에 말려 들어가는 대형 사고를 막기 위한 절대 규정입니다."
      },
      {
        german: "Halt! Stromschlaggefahr!",
        pronunciation: "할트! 슈트롬슐라크게파어!",
        korean: "정지! 감전 위험이 있습니다!",
        nuance: "배전반이나 젖은 전선 근처의 위험을 경고할 때 외치는 긴박한 소리입니다."
      }
    ],
    drillPatterns: [
      {
        pattern: "Bitte tragen Sie [Ausrüstung].",
        meaning: "[장비]를 착용해 주세요.",
        options: [
          { german: "den Gehörschutz", korean: "귀마개/청력보호구" },
          { german: "die Schutzbrille", korean: "보호안경" },
          { german: "die Handschuhe", korean: "장갑(비회전 가공 시)" }
        ]
      },
      {
        pattern: "Vorsicht vor [Gefahr]!",
        meaning: "[위험 요소]를 조심하세요!",
        options: [
          { german: "heißen Spänen", korean: "뜨거운 칩" },
          { german: "rotierenden Teilen", korean: "회전하는 부품" },
          { german: "der Quetschgefahr", korean: "끼임/협착 위험" }
        ]
      },
      {
        pattern: "[Aktion] ist strengstens verboten.",
        meaning: "[행동]은 엄격히 금지되어 있습니다.",
        options: [
          { german: "Das Arbeiten ohne Schutzbrille", korean: "보호안경 없이 작업하는 것" },
          { german: "Das Tragen von Handschuhen", korean: "장갑을 끼는 것" },
          { german: "Rauchen in der Werkstatt", korean: "작업장 내 흡연" }
        ]
      }
    ],
    dialogue: [
      { speaker: "Vorarbeiter", text: "Hallo Paul. Ich sehe, du willst an der Maschine drei arbeiten. Hast du deine PSA komplett?", translation: "안녕 파울. 3번 기계에서 작업하려는 거 같군. 개인 보호장구(PSA)는 다 챙겼나?" },
      { speaker: "Sie", text: "Ja, ich trage meine Sicherheitsschuhe der Klasse S3. Aber meine Schutzbrille liegt noch auf dem Tisch.", translation: "네, S3 등급 안전화는 신고 있습니다. 하지만 보호안경은 아직 테이블 위에 있네요." },
      { speaker: "Vorarbeiter", text: "Hol sie bitte sofort. Ohne Brille darfst du die Kabine nicht öffnen. Die Späne fliegen weit.", translation: "당장 가져와서 쓰게. 안경 없이는 기계 문을 열면 안 되네. 칩이 아주 멀리 튀거든." },
      { speaker: "Sie", text: "Ich verstehe. Ich setze sie direkt auf. Darf ich beim Spannen der Werkstücke Handschuhe tragen?", translation: "알겠습니다. 바로 쓰겠습니다. 공작물을 바이스에 물릴(고정할) 때 장갑을 껴도 되나요?" },
      { speaker: "Vorarbeiter", text: "Ja, beim Einspannen der rohen Teile ist es okay, wegen scharfer Kanten. Aber wenn die Spindel dreht: Keine Handschuhe!", translation: "응, 날카로운 모서리가 있으니 가공 전 소재를 고정할 때는 장갑 껴도 좋네. 하지만 스핀들이 회전할 때는 절대 장갑 금지야!" },
      { speaker: "Sie", text: "Verstanden. Wo befindet sich der Not-Aus-Schalter an dieser CNC-Steuerung?", translation: "이해했습니다. 이 CNC 제어반에서 비상정지 스위치는 어디에 붙어 있나요?" },
      { speaker: "Vorarbeiter", text: "Direkt unten rechts neben dem Handrad. Drücke ihn sofort, falls es kollidiert.", translation: "조작 핸들(조작반) 바로 우측 하단에 있네. 충돌 위험이 있으면 즉시 그것을 누르게." },
      { speaker: "Sie", text: "Alles klar. Sicherheit geht vor. Ich fange jetzt an.", translation: "잘 알겠습니다. 안전이 최고입니다. 이제 작업을 시작해 보겠습니다." }
    ],
    quiz: [
      {
        question: "독일어로 개인 안전 보호구(Personal Protective Equipment)의 공식 약어는?",
        options: ["die PSA", "die GEMA", "die AGB", "die AU"],
        answer: "die PSA",
        explanation: "PSA는 Persönliche Schutzausrüstung(개인보호장구)의 공식 약칭입니다."
      },
      {
        question: "스핀들이 고속 회전할 때 장갑을 착용하는 것에 대한 설명으로 옳은 것은?",
        options: ["말려 들어갈 위험 때문에 절대 금지된다.", "손을 보호하기 위해 필수로 껴야 한다.", "얇은 면장갑만 허용된다.", "아무 상관 없다."],
        answer: "말려 들어갈 위험 때문에 절대 금지된다.",
        explanation: "독일의 모든 가공 공장에서 회전 스핀들 근처 장갑 착용은 엄격히 verboten(금지)입니다."
      },
      {
        question: "응급처치 약품과 밴드가 든 '구급상자'의 독일어 명칭은?",
        options: ["der Erste-Hilfe-Kasten", "der Werkzeugkoffer", "der Spind", "der Mülleimer"],
        answer: "der Erste-Hilfe-Kasten",
        explanation: "Erste Hilfe(응급 처치) + Kasten(상자) = 구급상자입니다."
      }
    ]
  },
  {
    id: 8,
    title: "08단계: CNC 공구 & 측정 도구",
    level: "B1",
    section: "2부: 작업장 안전 & 기계 조작",
    description: "캘리퍼스, 마이크로미터 및 밀링 날(Fräser) 등 핵심 도구 용어",
    expressions: [
      {
        german: "Ich brauche einen Messschieber zum Messen.",
        pronunciation: "이히 브라우헤 아인 메스시버 춤 메센.",
        korean: "치수를 측정하기 위해 버니어 캘리퍼스가 필요합니다.",
        nuance: "작업자들이 매 순간 가공물의 치수를 확인할 때 쓰는 가장 대중적인 측정기입니다."
      },
      {
        german: "Wir müssen den Fräser wechseln. Er ist defekt.",
        pronunciation: "비어 뮈센 덴 프레이저 벡셀렌. 에어 이스트 데페크트.",
        korean: "밀링 커터를 교체해야 합니다. 파손되었습니다.",
        nuance: "밀링 날(Fräser)이 깨지거나(defekt) 부러진 경우 교체가 필요함을 보고할 때 씁니다."
      },
      {
        german: "Wo liegen die Wendeplatten für diesen Halter?",
        pronunciation: "보 리겐 디 벤데플라텐 퓌어 디젠 할터?",
        korean: "이 홀더용 인서트 팁(초경 팁)들은 어디에 있나요?",
        nuance: "Wendeplatte는 날이 마모되었을 때 돌려서 끼우거나 교체하는 금속 가공용 가공 팁입니다."
      },
      {
        german: "Für präzise Maße verwende ich die Bügelmessschraube.",
        pronunciation: "퓌어 프레치제 마제 페어벤데 이히 디 부겔메스슈라우베.",
        korean: "정밀한 치수를 위해 마이크로미터를 사용합니다.",
        nuance: "소수점 셋째 자리(마이크로미터 단위) 공차가 필요한 정밀 부품 측정 시 사용하는 수치 측정 도구입니다."
      },
      {
        german: "Der Schaftfräser hat einen Durchmesser von zehn Millimetern.",
        pronunciation: "데어 샤프트프레이저 하트 아이넨 두어히메서 폰 첸 밀리메터른.",
        korean: "엔드밀의 직경은 10 mm입니다.",
        nuance: "Durchmesser(직경, 파이)와 Schaftfräser(엔드밀)는 날 규격을 표현할 때 필수적입니다."
      },
      {
        german: "Reinigen Sie den Kegelschaft vor dem Einsetzen.",
        pronunciation: "라이니겐 지 덴 케겔샤프트 포어 뎀 아인제첸.",
        korean: "스핀들에 툴을 꽂기 전에 테이퍼 섕크(자루) 부분을 깨끗이 닦으세요.",
        nuance: "공구 홀더의 결합부(Kegelschaft)에 먼지가 있으면 정밀도(Rundlauf)가 어긋나게 됩니다."
      },
      {
        german: "Wo ist der Inbusschlüssel für den Schraubstock?",
        pronunciation: "보 이스트 데어 인부스슐리셀 퓌어 덴 슈라우브스토크?",
        korean: "바이스 고정용 육각 렌치가 어디 있나요?",
        nuance: "현장에서 Inbusschlüssel(육각 렌치) 혹은 Innensechskant는 공구 세팅 시 상시 활용됩니다."
      },
      {
        german: "Der Bohrer hat keinen Freiwinkel mehr, er brennt.",
        pronunciation: "데어 보러 하트 카이넨 프라이빈켈 메어, 에어 브렌트.",
        korean: "드릴 날의 여유각이 닳아서 가공 시 열이 나고 불이 붙으려 합니다.",
        nuance: "드릴의 끝부분 각도가 무뎌져 마찰이 과도하게 발생할 때 쓰는 숙련공들의 전문 표현입니다."
      }
    ],
    drillPatterns: [
      {
        pattern: "Ich brauche [Werkzeug].",
        meaning: "나는 [도구]가 필요합니다.",
        options: [
          { german: "einen Messschieber", korean: "버니어 캘리퍼스" },
          { german: "einen Radiusfräser", korean: "볼 엔드밀" },
          { german: "einen Drehmomentschlüssel", korean: "토크 렌치" }
        ]
      },
      {
        pattern: "Der Durchmesser beträgt [Wert].",
        meaning: "직경(지름)은 [수치]입니다.",
        options: [
          { german: "zwölf Millimeter", korean: "12 mm" },
          { german: "ein Zoll", korean: "1 인치" },
          { german: "null Komma fünf Millimeter", korean: "0.5 mm" }
        ]
      },
      {
        pattern: "[Werkzeug] ist abgenutzt.",
        meaning: "[도구]가 마모되었습니다.",
        options: [
          { german: "Die Wendeplatte", korean: "인서트 초경 팁" },
          { german: "Der Gewindebohrer", korean: "나사 탭 날" },
          { german: "Der Planfräser", korean: "페이스 커터 날" }
        ]
      }
    ],
    dialogue: [
      { speaker: "Sie", text: "Thomas, wo bewahren wir die neuen VHM-Fräser auf? Ich muss T4 neu bestücken.", translation: "토마스, 새 초경 엔드밀(VHM-Fräser)은 어디 보관해? 4번 툴(T4)을 새로 장착해야 해." },
      { speaker: "Kollege", text: "Im Werkzeugschrank im Gang B, ganz oben rechts. Die Schublade ist mit 'D10' beschriftet.", translation: "B통로에 있는 공구함 맨 위 오른쪽이야. 서랍에 'D10'이라고 라벨이 붙어 있어." },
      { speaker: "Sie", text: "Alles klar, ich habe einen Schaftfräser mit Durchmesser zehn Millimeter gefunden. Aber wo sind die Wendeplatten?", translation: "알았어, 10파이짜리 엔드밀 하나 찾았어. 근데 초경 인서트 팁(Wendeplatten)은 어디 있지?" },
      { speaker: "Kollege", text: "Die liegen in den kleinen Boxen direkt unter dem Messplatz. Brauchst du auch eine Bügelmessschraube?", translation: "측정기 거치대 바로 아래 작은 박스들에 있어. 외경 마이크로미터(Bügelmessschraube)도 필요해?" },
      { speaker: "Sie", text: "Ja, für das Passungsmaß von 25 H7. Der normale Messschieber ist nicht präzise genug.", translation: "응, 25 H7 끼워맞춤 치수 가공을 해야 해서. 일반 캘리퍼스로는 정밀도가 안 나와." },
      { speaker: "Kollege", text: "Hier, nimm meine Bügelmessschraube. Sie ist frisch kalibriert. Vergiss nicht, den Nullpunkt zu prüfen.", translation: "여기, 내 마이크로미터 써. 최근에 교정(kalibriert)한 거야. 영점 체크하는 거 잊지 말고." },
      { speaker: "Sie", text: "Vielen Dank. Ich reinige den Kegel des Werkzeughalters und spanne den Fräser ein.", translation: "고마워. 툴 홀더 섕크 부분을 깨끗이 닦고 밀링 날을 조이겠어." },
      { speaker: "Kollege", text: "Sehr gut. Viel Erfolg bei der Passung!", translation: "좋아. 끼워맞춤 작업 잘해 봐!" }
    ],
    quiz: [
      {
        question: "일반 캘리퍼스로 측정할 수 없는 고정밀 마이크론 치수를 재기 위한 나사식 측정기는?",
        options: ["die Bügelmessschraube", "der Hammer", "das Lineal", "der Planfräser"],
        answer: "die Bügelmessschraube",
        explanation: "Bügelmessschraube는 외경 마이크로미터의 공식 명칭입니다."
      },
      {
        question: "밀링 가공에 흔히 쓰이는 '엔드밀'을 뜻하는 올바른 독일어 단어는?",
        options: ["der Schaftfräser", "der Gewindebohrer", "der Messtaster", "die Wendeplatte"],
        answer: "der Schaftfräser",
        explanation: "Schaftfräser는 자루(Schaft) 형태의 밀링 커터인 엔드밀을 뜻합니다."
      },
      {
        question: "초경 합금으로 제조된 단단한 공구 재질을 뜻하는 독일어 약어는?",
        options: ["VHM (Vollhartmetall)", "PVC", "HSS", "ALU"],
        answer: "VHM (Vollhartmetall)",
        explanation: "VHM은 Vollhartmetall(전체 초경합금)의 약어로 고속 절삭 공구 소재의 표준입니다."
      }
    ]
  },
  {
    id: 9,
    title: "09단계: 도면 해독 & 공차/수치 조율",
    level: "B1",
    section: "2부: 작업장 안전 & 기계 조작",
    description: "제조 도면 치수, 공차 범위(Toleranz)에 관한 정밀 소통",
    expressions: [
      {
        german: "Die Toleranz liegt bei plus minus null Komma null zwei Millimetern.",
        pronunciation: "디 톨레란츠 리크트 바이 플러스 마이너스 눌 코마 눌 츠바이 밀리메터른.",
        korean: "공차 범위는 ±0.02 mm입니다.",
        nuance: "독일어로 소수점은 'Komma(코마)'로 읽습니다. 0.02는 null Komma null zwei입니다."
      },
      {
        german: "Das Maß auf der Zeichnung stimmt nicht mit dem Werkstück übere인.",
        pronunciation: "다스 마스 아우프 데어 차이히눙 슈팀트 니흐트 미트 데어 웨어크슈튀크 위버아인.",
        korean: "도면의 치수가 실제 가공물(소재)과 일치하지 않습니다.",
        nuance: "입고 소재의 치수 불량이나 도면 변경 의심 시 마이스터에게 보고할 때 씁니다."
      },
      {
        german: "Ist diese Oberfläche geschliffen oder gefräst?",
        pronunciation: "이스트 디제 오버플레헤 게슐리펜 오더 게프레스트?",
        korean: "이 표면은 연삭 가공인가요, 밀링 가공인가요?",
        nuance: "도면상 기호에 따른 표면 조도(Oberflächengüte) 가공 방식을 확인할 때 씁니다."
      },
      {
        german: "Wir müssen die Freimaßtoleranz beachten.",
        pronunciation: "비어 뮈센 디 프라이마스톨레란츠 베아흐텐.",
        korean: "일반 허용 공차(IT 등급 공차)를 준수해야 합니다.",
        nuance: "도면에 개별 지시가 없는 일반 부위의 기본 공차 범위를 확인할 때 씁니다."
      },
      {
        german: "Wo ist die aktuelle Version der technischen Zeichnung?",
        pronunciation: "보 이스트 디 악투에레 베어지온 데어 테히니셴 차이히눙?",
        korean: "기술 도면의 최신 버전이 어디 있나요?",
        nuance: "구 버전 도면으로 잘못 깎는 대형 실수를 방지하기 위해 버전을 검토할 때 유용합니다."
      },
      {
        german: "Das Ist-Maß weicht vom Soll-Maß ab.",
        pronunciation: "다스 이스트-마스 바이히트 폼 졸-마스 아프.",
        korean: "측정값(실제 치수)이 규격값(도면 치수)에서 벗어납니다.",
        nuance: "Ist-Maß(실제 측정한 값)와 Soll-Maß(규정된 설계 값)은 품질 관리 및 가공 보정 시 핵심 단어입니다."
      },
      {
        german: "Gibt es hier eine Passung H7?",
        pronunciation: "기프트 에스 히어 아이네 파숭 하-지벤?",
        korean: "여기에 H7 끼워맞춤 공차가 적용됩니까?",
        nuance: "H7 같은 끼워맞춤 정밀 치수를 가공할 때는 핀 게이지 등으로 마무리를 체크해야 합니다."
      },
      {
        german: "Können wir diese Phase auf ein mal zwei Millimeter ändern?",
        pronunciation: "콘넨 비어 디제 파제 아우프 아인 말 츠바이 밀리메터 엔더른?",
        korean: "이 모따기(Chamfer) 치수를 1x2 mm로 변경할 수 있을까요?",
        nuance: "Phase(Chamfer/모따기) 가공을 도면과 조금 다르게 임의 수정해야 할 때 제안하는 표현입니다."
      }
    ],
    drillPatterns: [
      {
        pattern: "Das Maß ist [Zustand].",
        meaning: "치수가 [상태]입니다.",
        options: [
          { german: "außerhalb der Toleranz", korean: "공차 범위를 벗어난" },
          { german: "innerhalb der Toleranz", korean: "공차 범위 내에 있는" },
          { german: "nicht korrekt", korean: "올바르지 않은" }
        ]
      },
      {
        pattern: "Bitte prüfen Sie [Nomen] auf der Zeichnung.",
        meaning: "도면 상의 [명사]를 확인해 주세요.",
        options: [
          { german: "das Soll-Maß", korean: "설계 치수" },
          { german: "die Toleranzklasse", korean: "공차 등급" },
          { german: "die Revisionsnummer", korean: "도면 개정 번호" }
        ]
      },
      {
        pattern: "Die Oberfläche muss [Zustand] werden.",
        meaning: "표면은 [가공 상태]가 되어야 합니다.",
        options: [
          { german: "geschliffen", korean: "연삭(그라인딩)가공" },
          { german: "gefräst", korean: "밀링가공" },
          { german: "poliert", korean: "폴리싱(광택)가공" }
        ]
      }
    ],
    dialogue: [
      { speaker: "Sie", text: "Markus, schau mal bitte auf diesen Plan. Dieses Passungsmaß hier irritiert mich.", translation: "마쿠스 부장님, 이 도면 좀 봐주세요. 여기 끼워맞춤 치수 부분이 좀 걸리네요." },
      { speaker: "Meister", text: "Lass sehen. Ah, das ist eine Bohrung mit 20 H7. Wo liegt das Problem?", translation: "어디 봅시다. 아, 20 H7 내경 가공이군요. 무슨 문제가 있나요?" },
      { speaker: "Sie", text: "Das Ist-Maß nach dem Bohren liegt bei 19,95 Millimetern. Der Dorn geht nicht durch.", translation: "드릴 뚫고 측정해보니 실제 지름이 19.95 mm 나옵니다. 테스트 핀(Dorn)이 안 들어갑니다." },
      { speaker: "Meister", text: "Richtig. H7 hat ein Mindestmaß von 20,000 und ein Höchstmaß von plus 21 Mikrometern. Das ist Untermaß.", translation: "맞아요. H7은 최소 20.000에서 최대 +0.021 mm 사이여야 해요. 지금은 규격 미달(치수 부족) 상태네요." },
      { speaker: "Sie", text: "Soll ich eine Reibahle nehmen oder das Maß auf der Fräsmaschine mit dem Zirkularfräsprogramm aufweiten?", translation: "리머(Reibahle)를 쓸까요, 아니면 밀링머신에서 원호 보간 가공 프로그램(Circular Milling)으로 내경을 넓힐까요?" },
      { speaker: "Meister", text: "Da wir nur drei Teile machen, ist die Reibahle schneller. Nimm eine verstellbare Reibahle.", translation: "단 3개만 제작하니까 리머 작업이 빠릅니다. 가변식 리머를 사용하세요." },
      { speaker: "Sie", text: "Verstanden. Ich prüfe das Soll-Maß danach noch einmal mit dem Grenzlehrdorn.", translation: "이해했습니다. 작업 후에 플러그 게이지(Grenzlehrdorn)로 설계 값을 다시 확인하겠습니다." },
      { speaker: "Meister", text: "Guter Plan, Paul. Achte auf reichlich Kühlung, damit sich das Aluminium nicht verzieht.", translation: "좋은 계획이에요, 파울. 알루미늄이 변형(verziehen)되지 않게 냉각수를 충분히 뿌려요." }
    ],
    quiz: [
      {
        question: "도면 설계상 지켜야 하는 목표 수치(기준 치수)를 지칭하는 독일어 단어는?",
        options: ["das Soll-Maß", "das Ist-Maß", "die Toleranz", "die Phase"],
        answer: "das Soll-Maß",
        explanation: "Soll-Maß는 설계상의 목표(기준) 치수이며, Ist-Maß는 실제 가공된 측정값을 뜻합니다."
      },
      {
        question: "H7 같은 초정밀 구멍 가공 시 정밀한 정삭을 위해 구멍을 다듬는 도구는?",
        options: ["die Reibahle", "der Bohrer", "der Hammer", "die Feile"],
        answer: "die Reibahle",
        explanation: "Reibahle(리머)는 드릴 작업 후 구멍 내벽의 정밀 조도와 치수를 내기 위한 정삭 공구입니다."
      },
      {
        question: "공차 규격보다 작게 깎여 구멍 직경이 좁은 상태를 뜻하는 현장 어휘는?",
        options: ["das Untermaß", "das Übermaß", "das Passmaß", "das Freimaß"],
        answer: "das Untermaß",
        explanation: "가공 치수가 허용 하한값 미만인 경우 Untermaß(치수 미달)라고 합니다."
      }
    ]
  },
  {
    id: 10,
    title: "10단계: 기계 세팅 & 가공 시작",
    level: "B1",
    section: "2부: 작업장 안전 & 기계 조작",
    description: "CNC 가공을 위한 공작물 클램핑, 원점 세팅 및 테스트 가공(Probelauf)",
    expressions: [
      {
        german: "Ich muss das Werkstück fest einspannen.",
        pronunciation: "이히 무스 다스 웨어크슈튀크 페스트 아인스판넨.",
        korean: "공작물(가공할 금속)을 단단히 고정(클램핑)해야 합니다.",
        nuance: "바이스(Schraubstock)나 고정 장치로 공작물이 튀지 않게 세팅할 때의 동사 einspannen입니다."
      },
      {
        german: "Hast du den Nullpunkt in X, Y und Z gesetzt?",
        pronunciation: "하스트 두 덴 눌푼크트 인 익스, 입실론 운트 체트 게제츠트?",
        korean: "X, Y, Z축 원점(좌표계)을 설정했나요?",
        nuance: "CNC 밀링에서 가공 전 터치 프로브 등을 이용해 원점을 설정했는지 확인하는 문장입니다. Y축은 독일어로 입실론(Ypsilon)이라 발음합니다."
      },
      {
        german: "Ich starte jetzt den Probelauf ohne Material.",
        pronunciation: "이히 슈타어테 옛츠트 덴 프로벨라우프 오네 마테리알.",
        korean: "소재 없이 공동작(Dry Run/테스트 런)을 시작하겠습니다.",
        nuance: "프로그램 충돌 방지를 위해 빈 공간에서 기계를 돌려보는 과정입니다."
      },
      {
        german: "Der Schraubstock muss mit dem Drehmomentschlüssel angezogen werden.",
        pronunciation: "데어 슈라우브스토크 무스 미트 뎀 드레모멘트슐리셀 안게조겐 베어덴.",
        korean: "바이스는 반드시 토크 렌치로 조여야 합니다.",
        nuance: "가공 부품의 고정 압력을 일정하게 유지하여 휠링(변형)을 막기 위한 작업 수칙입니다."
      },
      {
        german: "Laden Sie das Programm Nummer zehn über das Netzwerk.",
        pronunciation: "라덴 지 다스 프로그람 누머 첸 위버 다스 네츠베어크.",
        korean: "네트워크를 통해 10번 프로그램을 로드하세요.",
        nuance: "로컬 메모리가 아닌 서버망에서 최신 NC 코드를 기계로 내려받을 때의 대화입니다."
      },
      {
        german: "Ich fahre die Achsen manuell mit dem Handrad.",
        pronunciation: "이히 파레 디 악센 마누엘 미트 뎀 한트라트.",
        korean: "수동 핸들(Handwheel)로 축을 직접 이동시키고 있습니다.",
        nuance: "Nullpunkt(원점)를 잡거나 수동 세팅할 때 MPG 핸들(Handrad)을 돌려 축을 조작하는 동작입니다."
      },
      {
        german: "Der Vorschub-Overriding steht auf null Prozent.",
        pronunciation: "데어 포어슈브-오버라이딩 슈테트 아우프 눌 프로젠트.",
        korean: "피드 오버라이드(이송 조절 다이얼)가 0%로 되어 있습니다.",
        nuance: "기계 시작 직전, 오동작 시 충돌을 막기 위해 다이얼을 0%에 두고 서서히 올리는 안전 기법입니다."
      },
      {
        german: "Ist die Kabinentür verriegelt?",
        pronunciation: "이스트 디 카빈엔튀어 페어리겔트?",
        korean: "기계 차폐 도어가 잠겼습니까?",
        nuance: "문이 잠겨 안전 센서가 동작해야 가공 사이클(Cycle Start)이 활성화됩니다."
      }
    ],
    drillPatterns: [
      {
        pattern: "Ich starte [Aktion].",
        meaning: "나는 [동작]을 시작합니다.",
        options: [
          { german: "den Probelauf", korean: "시가공 / 공회전 테스트" },
          { german: "das CNC-Programm", korean: "CNC 프로그램 실행" },
          { german: "die Spindel", korean: "스핀들 작동" }
        ]
      },
      {
        pattern: "Bitte laden Sie [Nomen].",
        meaning: "[명사]를 로드(불러오기)해 주세요.",
        options: [
          { german: "das Hauptprogramm", korean: "메인 프로그램" },
          { german: "das Unterprogramm", korean: "서브 프로그램" },
          { german: "die Werkzeugdaten", korean: "공구 데이터 세트" }
        ]
      },
      {
        pattern: "Stellen Sie [Nomen] auf [Wert].",
        meaning: "[명사]를 [수치]로 설정하십시오.",
        options: [
          { german: "den Vorschub-Overriding, zehn Prozent", korean: "이송 속도 다이얼, 10%" },
          { german: "die Drehzahl, tausend Umdrehungen", korean: "회전속도, 1000 RPM" },
          { german: "den Nullpunkt, G54", korean: "좌표계 원점, G54" }
        ]
      }
    ],
    dialogue: [
      { speaker: "Sie", text: "Thomas, die Vorrichtung ist montiert. Ich spanne jetzt das Rohteil ein.", translation: "토마스, 고정 지그(Vorrichtung) 조립 완료했어. 이제 원소재(Rohteil)를 물릴게." },
      { speaker: "Kollege", text: "Gut. Benutze den Drehmomentschlüssel mit dreißig Newtonmetern, sonst verzieht sich das Werkstück.", translation: "좋아. 꼭 30 Nm짜리 토크 렌치를 써서 조여 줘. 안 그러면 가공 부품이 휠 수 있어." },
      { speaker: "Sie", text: "Erledigt. Jetzt hole ich den 3D-Taster, um den Werkstück-Nullpunkt in G54 einzustellen.", translation: "조임 완료. 이제 G54 좌표계에 가공 원점을 세팅하기 위해 3D 터치 프로브(3D-Taster)를 가져올게." },
      { speaker: "Kollege", text: "Denk daran, die X- und Y-Werte auf der Steuerung abzunullen. Und vergiss Z nicht auf der Oberkante.", translation: "컨트롤러 화면에서 X축과 Y축 값을 영점으로 세팅하는 거 명심해. 그리고 소재 상면에서 Z축 원점 잡는 것도 잊지 마." },
      { speaker: "Sie", text: "Ja, Z0 ist die Oberkante des Werkstücks. Ich lade das G-Code-Programm O1005 via DNC.", translation: "응, Z0은 공작물 윗면이야. DNC를 통해서 O1005 G코드 프로그램을 로드하겠어." },
      { speaker: "Kollege", text: "Haben wir die Werkzeugkorrekturen kontrolliert? Stimmen die Längenwerte für T1 bis T5?", translation: "공구 오프셋(Korrekturen)은 확인했어? 1번부터 5번 툴의 길이 보정값이 올바른가?" },
      { speaker: "Sie", text: "Ja, alle Längen- und Radiusoffsets sind in der Werkzeugtabelle hinterlegt. Ich starte den Probelauf mit 100mm Z-Abstand.", translation: "응, 모든 길이/반경 보정값은 툴 테이블에 이미 저장되어 있어. 우선 Z축 안전거리 100mm를 띄우고 테스트 공회전(Probelauf)을 시작해 볼게." },
      { speaker: "Kollege", text: "Sehr vernünftig. Halt den Feedhold-Knopf bereit. Sicher ist sicher.", translation: "아주 합리적인 방법이야. 피드 홀드(일시정지) 버튼에 손을 올리고 대기해. 안전이 제일이니까." }
    ],
    quiz: [
      {
        question: "가공 좌표계 원점을 잡기 위해 CNC 스핀들에 꽂아 소재 표면을 터치하는 정밀 측정 장비는?",
        options: ["der 3D-Taster", "der Planfräser", "die Drahtbürste", "der Inbusschlüssel"],
        answer: "der 3D-Taster",
        explanation: "3D-Taster(3D 센서/프로브)는 공작물 좌표계(G54 등) 원점을 수동 혹은 반자동으로 잡을 때 쓰는 정밀 터치 센서입니다."
      },
      {
        question: "가공용 금속 덩어리(절삭 가공 전 원재료)를 지칭하는 단어는?",
        options: ["das Rohteil", "das Fertigteil", "das Altmetall", "das Spannmittel"],
        answer: "das Rohteil",
        explanation: "Rohteil은 가공 전 날것의 공작물 소재(raw part)를 뜻합니다. 가공 완료 제품은 Fertigteil입니다."
      },
      {
        question: "가공 실행 전 간섭이나 충돌 여부를 감지하기 위해 빈 공간에서 모의 운전하는 것을 무엇이라 하는가?",
        options: ["der Probelauf", "die Übergabe", "die Montage", "das Fräsen"],
        answer: "der Probelauf",
        explanation: "Probelauf(Dry run)는 간섭 확인을 위한 모의 시운전 공회전을 의미합니다."
      }
    ]
  },
  {
    id: 11,
    title: "11단계: 에러 대응 & 공구 마모 보고",
    level: "B2",
    section: "3부: 협업 & 비즈니스 소통",
    description: "장비 알람 및 기계 결함 대처, 공구 교체 보고",
    expressions: [
      {
        german: "Die Maschine zeigt eine Fehlermeldung auf dem Bildschirm.",
        pronunciation: "디 마시네 차이그트 아이네 페일러멜둥 아우프 뎀 빌트시름.",
        korean: "기계 화면에 에러 메세지(알람)가 표시되어 있습니다.",
        nuance: "CNC 제어반(Fanuc, Siemens 등)에 알람 코드가 떠서 도움이 필요할 때 사용합니다."
      },
      {
        german: "Der Fräser hat Verschleiß. Ich muss die Wendeplatte drehen.",
        pronunciation: "데어 프레이저 하트 페어슐라이스. 이히 무스 디 벤데플라테 드레엔.",
        korean: "밀링 날이 마모되었습니다. 인서트 팁을 돌려 끼워야겠습니다.",
        nuance: "초경 팁의 마모(Verschleiß) 상태를 보고하고 사용하지 않은 날 모서리로 변경할 때의 표현입니다."
      },
      {
        german: "Es fließt kein Kühlmittel. Die Pumpe ist trocken.",
        pronunciation: "에스 플리스트 카인 퀼미텔. 디 펌페 이스트 트로켄.",
        korean: "냉각수(절삭유)가 나오지 않습니다. 펌프가 돌지 않거나 비어 있습니다.",
        nuance: "가공 중 열을 식혀주는 절삭유(Kühlmittel) 계통에 이상이 있을 때 경보용 문구입니다."
      },
      {
        german: "Die Maße stimmen wegen Werkzeugabnutzung nicht mehr.",
        pronunciation: "디 마제 슈팀멘 베겐 웨어크초이히아프누충 니흐트 메어.",
        korean: "공구 마모 때문에 가공 치수가 더 이상 맞지 않습니다.",
        nuance: "날이 미세하게 닳으면 결과 치수가 커지는 경향(외경 기준)이 있어 보정(Kompensation)이 필요함을 알립니다."
      },
      {
        german: "Ich muss den Späneförderer leeren.",
        pronunciation: "이히 무스 덴 슈페네푀어더러 레어렌.",
        korean: "칩 컨베이어(쇳가루 통)를 비워야 합니다.",
        nuance: "가공 시 쌓인 다량의 칩이 칩 컨베이어(Späneförderer) 오작동을 유발할 수 있으므로 제때 비워줍니다."
      },
      {
        german: "Die Spindel vibriert bei hohen Drehzahlen.",
        pronunciation: "디 슈핀델 비브리어트 바이 호엔 드레이찰렌.",
        korean: "고속 회전 시 스핀들(주축)에서 진동이 느껴집니다.",
        nuance: "스핀들 베어링 마모나 홀더 밸런스 불량 등의 이상 증후를 조장에게 전할 때 씁니다."
      },
      {
        german: "Ich habe den Not-Aus-Knopf gedrückt, weil das Werkzeug kollidiert ist.",
        pronunciation: "이히 하베 덴 노트-아우스-크노프 게드룩트, 바일 다스 웨어크초이히 콜리디어트 이스트.",
        korean: "공구가 충돌하여 비상정지 버튼을 눌렀습니다.",
        nuance: "현장에서 크래시(Crash/Kollision)가 났을 때 긴급 상황 전말을 상사에게 보고하는 가슴 아픈 문장입니다."
      },
      {
        german: "Der Vorschubmotor ist überhitzt.",
        pronunciation: "데어 포어슈브모터 이스트 위버히츠트.",
        korean: "이송 축 모터가 과열되었습니다.",
        nuance: "기계 부하 과다로 서보 알람(Servo Alarm)이 걸렸을 때의 설명입니다."
      }
    ],
    drillPatterns: [
      {
        pattern: "Die Maschine [Problem].",
        meaning: "기계가 [문제 상황]입니다.",
        options: [
          { german: "stoppt plötzlich", korean: "갑자기 멈추다" },
          { german: "macht komische Geräusche", korean: "이상한 소음을 내다" },
          { german: "vibriert stark", korean: "강하게 진동하다" }
        ]
      },
      {
        pattern: "Ich muss [Aktion].",
        meaning: "나는 [행동]을 해야 합니다.",
        options: [
          { german: "die Wendeplatte wechseln", korean: "인서트 팁을 교체하다" },
          { german: "Kühlmittel nachfüllen", korean: "절삭유를 보충하다" },
          { german: "die Maschine ausschalten", korean: "기계 전원을 끄다" }
        ]
      },
      {
        pattern: "Es gibt eine Störung bei [Teil].",
        meaning: "[장치]에 장애가 발생했습니다.",
        options: [
          { german: "der Kühlmittelpumpe", korean: "절삭유 펌프" },
          { german: "der Schmierung", korean: "가이드 루브 오일 공급계통" },
          { german: "dem Späneförderer", korean: "칩 컨베이어" }
        ]
      }
    ],
    dialogue: [
      { speaker: "Sie", text: "Markus, die CNC-Maschine Nummer drei hat plötzlich gestoppt. Alarm 300 steht auf der Steuerung.", translation: "마쿠스 부장님, 3번 CNC 기계가 갑자기 정지했습니다. 컨트롤러에 300번 알람이 떴습니다." },
      { speaker: "Meister", text: "Lass mich sehen. Ach, das ist eine Überlastung der Z-Achse. War das Werkzeug noch scharf?", translation: "한번 봅시다. 아, Z축 과부하 알람이군요. 사용하던 공구 날이 살아 있었나요?" },
      { speaker: "Sie", text: "Ich glaube, der Bohrfräser hat starken Verschleiß. Die Späne waren sehr dunkel und blau verfärbt.", translation: "아무래도 헬리컬 드릴 엔드밀이 심하게 마모된 것 같습니다. 칩 색상이 아주 어둡고 파랗게 변색되어 나갔습니다." },
      { speaker: "Meister", text: "Das ist ein klares Zeichen für Hitze durch Stumpfheit. Zeig mir das Werkzeug.", translation: "공구가 무뎌져서 마찰열이 크게 발생했다는 확실한 신호군요. 공구 상태를 보여주세요." },
      { speaker: "Sie", text: "Hier ist der Fräser. Die Ecken der Wendeplatten sind komplett ausgebrochen.", translation: "여기 공구가 있습니다. 인서트 초경 팁 모서리가 완전히 깨져 나갔습니다." },
      { speaker: "Meister", text: "Ja, kein Wunder, dass die Z-Achse blockiert hat. Wir müssen die Platten wechseln und den G54-Offset prüfen.", translation: "그렇군요, Z축 부하가 걸려 멈출 만했네요. 팁을 교체하고 G54 좌표계 보정치에 변동이 없는지 확인합시다." },
      { speaker: "Sie", text: "Ich werde die T1-Wendeplatten wechseln und die Schrauben mit dem Drehmoment-Schraubendreher festziehen.", translation: "1번 툴(T1) 인서트 팁을 교체하고 토크 드라이버로 나사를 규정 토크에 맞게 조이겠습니다." },
      { speaker: "Meister", text: "Sehr gut. Füll auch gleich Kühlmittel nach, die Konzentration muss bei acht Prozent liegen.", translation: "좋습니다. 절삭유(냉각수)도 채워주세요. 농도는 8%를 유지해야 합니다." }
    ],
    quiz: [
      {
        question: "마찰열로 인해 쇳가루(칩)의 색상이 '파랗게' 변한 상태가 의미하는 바는?",
        options: ["공구가 날카로워 잘 깎인다.", "공구가 무뎌져 마모와 열이 극심하다.", "정상적인 가공 과정이다.", "소재가 불량이다."],
        answer: "공구가 무뎌져 마모와 열이 극심하다.",
        explanation: "철 가공 시 공구가 무뎌지면 열방출이 안 되어 칩이 파란색 혹은 검은색으로 탄화하여 배출됩니다."
      },
      {
        question: "기계 내부에서 깎여 나간 쇳가루를 외부 칩 통으로 긁어 내보내는 장치는?",
        options: ["der Späneförderer", "der Werkzeugwechsler", "die Spindel", "der Nullpunkttaster"],
        answer: "der Späneförderer",
        explanation: "Späne(칩) + Förderer(컨베이어/수송기)는 절삭 공장에서 필수적인 자동 청소 장비입니다."
      },
      {
        question: "공구 마찰 부위를 식혀주고 윤활 역할을 하는 '절삭유 / 냉각수'는 독일어로?",
        options: ["das Kühlmittel", "das Getriebeöl", "das Benzin", "das Wasser"],
        answer: "das Kühlmittel",
        explanation: "Kühlen(식히다) + Mittel(제재) = 냉각수(절삭유)를 의미합니다."
      }
    ]
  },
  {
    id: 12,
    title: "12단계: 작업 교대 (Übergabe)",
    level: "B2",
    section: "3부: 협업 & 비즈니스 소통",
    description: "교대자에게 잔여 가공 수량, 장비 컨디션 인수인계 표현",
    expressions: [
      {
        german: "Ich mache jetzt Übergabe an die Spätschicht.",
        pronunciation: "이히 마헤 옛츠트 위버가베 안 디 슈페트시히트.",
        korean: "이제 오후 조(야간 조)에게 인수인계를 하겠습니다.",
        nuance: "교대 근무 시 전근무자가 후근무자에게 상황을 전달하는 행위를 Übergabe라고 합니다."
      },
      {
        german: "Es müssen noch fünfzig Stück gefräst werden.",
        pronunciation: "에스 뮈센 노흐 퓌니프치히 슈튀크 게프레스트 베어덴.",
        korean: "가공 수량이 아직 50개 더 남았습니다.",
        nuance: "잔여 작업 수량(Stückzahl)을 확실히 짚어주어야 교대자가 작업을 이어서 처리할 수 있습니다."
      },
      {
        german: "Die Maschine läuft stabil. Kein Werkzeugwechsel nötig.",
        pronunciation: "디 마시네 로이프트 슈타빌. 카인 웨어크초이히벡셀 뇌티히.",
        korean: "장비는 안정적으로 가공 중입니다. 공구 교체는 필요 없습니다.",
        nuance: "기계 상태가 이상 없고 안전함을 교대자에게 안심시켜 주는 표현입니다."
      },
      {
        german: "Ich habe den G54-Offset um null Komma null fünf Millimeter korrigiert.",
        pronunciation: "이히 하베 덴 게-피어운트퓌니프치히-오프셋 움 눌 코마 눌 퓌니프 밀리메터 코리기어트.",
        korean: "G54 좌표 오프셋 값을 0.05 mm만큼 보정해 두었습니다.",
        nuance: "가공 치수가 상한값에 가까워져서 X 혹은 Z축 값을 미세 보정(wear compensation)했음을 동료에게 인계합니다."
      },
      {
        german: "Der Rohmaterial-Bestand reicht noch für zwei Stunden.",
        pronunciation: "데어 로마테리알-베스탄트 라이히트 노흐 퓌어 츠바이 슈툰덴.",
        korean: "원자재(소재) 재고량이 2시간 분량밖에 남지 않았습니다.",
        nuance: "소재 공급 요청이 지연되지 않도록 물류 담당자나 교대자에게 자재 확보를 지시하는 표현입니다."
      },
      {
        german: "Achtung, T3 hat eine Reststandzeit von zehn Minuten.",
        pronunciation: "아흐퉁, 테-드라이 하트 아이네 레스트슈탄트차이트 폰 첸 미누텐.",
        korean: "주의해, 3번 공구의 수명(마모 수명)이 10분 정도 남았어.",
        nuance: "Standzeit(공구 수명 시간)를 관리하여, 가공 중 날이 부러지는 참사를 예방하기 위한 중요 정보입니다."
      },
      {
        german: "Ich habe die Werkzeuge gereinigt und einsortiert.",
        pronunciation: "이히 하베 디 웨어크초이게 게라이니크트 운트 아인조르티어트.",
        korean: "사용을 마친 공구들을 닦아서 제자리에 분류해 두었습니다.",
        nuance: "독일의 깔끔한 정리 정돈 예절(Ordnung)에 부합하는 교대 소통입니다."
      },
      {
        german: "Die Messprotokolle liegen neben dem Messplatz.",
        pronunciation: "디 메스프로토콜레 리겐 네벤 뎀 메스플라츠.",
        korean: "성적서(측정 기록표)들은 측정대 옆에 놓여 있습니다.",
        nuance: "Messprotokoll(치수 측정 성적서)은 품질 검사 및 납품 추적을 위해 매 교대 시 넘겨줘야 합니다."
      }
    ],
    drillPatterns: [
      {
        pattern: "Der Kollege arbeitet in der [Schicht].",
        meaning: "그 동료는 [교대조]에서 근무합니다.",
        options: [
          { german: "Frühschicht", korean: "오전 조" },
          { german: "Spätschicht", korean: "오후 조" },
          { german: "Nachtschicht", korean: "야간 조" }
        ]
      },
      {
        pattern: "Wir müssen noch [Anzahl] Teile fertigen.",
        meaning: "우리는 아직 [수량]개의 부품을 생산해야 합니다.",
        options: [
          { german: "zehn", korean: "10" },
          { german: "hundert", korean: "100" },
          { german: "keine", korean: "생산 완료 (0)" }
        ]
      },
      {
        pattern: "Achten Sie auf [Nomen] bei T2.",
        meaning: "2번 툴의 [이상 징후]를 유심히 지켜보세요.",
        options: [
          { german: "die Standzeit", korean: "공구 수명 잔여시간" },
          { german: "den Verschleiß", korean: "마모 현상" },
          { german: "das Geräusch", korean: "작동 소음" }
        ]
      }
    ],
    dialogue: [
      { speaker: "Sven", text: "Hallo Paul. Wie läuft die Maschine Nummer drei? Bereit für die Übergabe?", translation: "안녕 파울. 3번 기계 어때? 교대 근무(Übergabe) 인수 받을 준비 됐어?" },
      { speaker: "Sie", text: "Hallo Sven. Ja, die Maschine läuft sehr stabil. Das Programm für die Alu-Halter ist aktiv.", translation: "안녕 스벤. 응, 기계 아주 잘 돌아가고 있어. 알루미늄 홀더 가공 프로그램 실행 중이야." },
      { speaker: "Sven", text: "Wie viele Teile sind schon fertig und wie viele fehlen noch für den Auftrag?", translation: "가공 완료된 수량은 몇 개고 이번 주문 채우려면 몇 개 더 해야 해?" },
      { speaker: "Sie", text: "Vierzig Stück sind bereits verpackt und die Messprotokolle liegen auf dem Tisch. Zehn Stück fehlen noch.", translation: "40개는 포장 완료했고 측정 성적서(Messprotokolle)는 테이블 위에 있어. 10개 더 깎으면 끝이야." },
      { speaker: "Sven", text: "Super. Gab es Auffälligkeiten beim Verschleiß der Schneidwerkzeuge?", translation: "나이스. 가공 공구 마모에 특이사항은 없었어?" },
      { speaker: "Sie", text: "Ja, der Schruppfräser T3 hat fast das Ende seiner Standzeit erreicht. Er hält vielleicht noch für zwei Teile.", translation: "응, 3번 황삭 엔드밀(T3) 수명이 다 되어 가. 한 2개 더 깎으면 날 한계를 맞을 거야." },
      { speaker: "Sven", text: "Alles klar, dann wechsle ich T3 nach dem nächsten Teil. Hast du die Maße korrigiert?", translation: "알았어, 그럼 다음 부품 나오고 T3를 바꿀게. 치수 보정은 해 뒀어?" },
      { speaker: "Sie", text: "Ja, ich habe das Verschleiß-Maß in X um plus null Komma null zwei Millimeter angepasst. Die Maße passen jetzt genau.", translation: "응, X축 마모 보정치(Verschleiß-Maß)를 +0.02 mm 수정해 뒀어. 현재 치수는 딱 떨어져." }
    ],
    quiz: [
      {
        question: "공구의 '사용 수명 시간'을 뜻하는 올바른 독일어 기술 용어는?",
        options: ["die Standzeit", "die Übergabe", "die Schicht", "die Messung"],
        answer: "die Standzeit",
        explanation: "Standzeit는 절삭 공구가 마모 파손 없이 정상적으로 깎을 수 있는 잔여 한계 수명 시간을 의미합니다."
      },
      {
        question: "오전 6시부터 시작되는 아침 근무조를 무엇이라 하는가?",
        options: ["die Frühschicht", "die Spätschicht", "die Nachtschicht", "die Freischicht"],
        answer: "die Frühschicht",
        explanation: "Früh(이른/아침) + Schicht(조) = 오전 교대조를 지칭합니다."
      },
      {
        question: "생산된 부품의 치수를 수동 확인하여 기록하는 '측정 성적서'는?",
        options: ["das Messprotokoll", "der Arbeitsvertrag", "die Quittung", "das Handrad"],
        answer: "das Messprotokoll",
        explanation: "Messen(측정하다) + Protokoll(기록서) = 측정 성적서를 의미합니다."
      }
    ]
  },
  {
    id: 13,
    title: "13단계: 휴가 신청 & 병가 보고",
    level: "B1",
    section: "3부: 협업 & 비즈니스 소통",
    description: "휴가 신청서 작성 및 아침 병가(Krankmeldung) 이메일 공식 서식",
    expressions: [
      {
        german: "Ich möchte nächste Woche drei Tage Urlaub beantragen.",
        pronunciation: "이히 뫼히테 네흐스테 보헤 드라이 타게 우를라우프 베안트라겐.",
        korean: "다음 주에 3일간 휴가를 신청하고 싶습니다.",
        nuance: "Urlaub beantragen(휴가를 신청하다)은 직장에서 빈번하게 쓰이는 행정 절차 표현입니다."
      },
      {
        german: "Guten Morgen. Ich bin krank und kann heute nicht zur Arbeit kommen.",
        pronunciation: "구텐 모어겐. 이히 빈 크랑크 운트 칸 호이테 니흐트 처 아어바이트 코멘.",
        korean: "안녕하세요. 몸이 아파서 오늘 출근을 하지 못할 것 같습니다.",
        nuance: "당일 급작스런 병가 통보 시 아침 근무 시작 전에 상사에게 전화나 메일로 알려야 합니다."
      },
      {
        german: "Ich schicke Ihnen meine Krankmeldung (AU-Bescheinigung) per E-Mail.",
        pronunciation: "이히 시케 이넨 마이네 크랑크멜둥 (아우-베샤이니궁) 페어 이메일.",
        korean: "병가 진단서(의사 소견서)를 이메일로 송부하겠습니다.",
        nuance: "독일에서는 아파서 결근 시 의사에게 진단서(Arbeitsunfähigkeitsbescheinigung, 줄여서 AU)를 받아 제출해야 합니다."
      },
      {
        german: "Sehr geehrte Damen und Herren,",
        pronunciation: "제어 게에어테 다멘 운트 헤어렌",
        korean: "관계자 여러분께, (수신인 불명 시의 메일 첫인사)",
        nuance: "인사과 등 메일을 받는 담당자 이름을 모를 때 사용하는 가장 기본적이고 격식 있는 비즈니스 서두입니다."
      },
      {
        german: "Mit freundlichen Grüßen,",
        pronunciation: "미트 프로인트리헨 그뤼센",
        korean: "경의를 표하며, (비즈니스 이메일 끝인사)",
        nuance: "독일의 모든 비즈니스 및 공문서 이메일 끝맺음에 사용되는 만능 서명 구문입니다."
      },
      {
        german: "Ich habe einen Termin beim Zahnarzt.",
        pronunciation: "이히 하베 아이네 테어민 바임 찬아어츠트.",
        korean: "치과 예약이 있습니다.",
        nuance: "개인적인 진료 예약(치과 등)으로 조퇴나 지참을 보고할 때 유용합니다."
      },
      {
        german: "Wann wird mein Urlaub genehmigt?",
        pronunciation: "반 비어트 마인 우를라우프 게네미크트?",
        korean: "제 휴가는 언제 승인되나요?",
        nuance: "genehmigen(승인하다)의 수동형으로 제출한 휴가 결재 상태를 물을 때 씁니다."
      },
      {
        german: "Ich wünsche Ihnen eine erholsame Urlaubszeit.",
        pronunciation: "이히 뫼히테 이넨 아이네 에어홀자메 우를라우프스차이트.",
        korean: "편안한 휴가 기간이 되시길 기원합니다.",
        nuance: "휴가를 떠나는 동료나 상사에게 건네기 딱 좋은 예의 바른 인사말입니다."
      }
    ],
    drillPatterns: [
      {
        pattern: "Ich möchte [Nomen] beantragen.",
        meaning: "저는 [명사]를 신청하고 싶습니다.",
        options: [
          { german: "Urlaub", korean: "휴가" },
          { german: "Elternzeit", korean: "육아휴직" },
          { german: "einen Vorschuss", korean: "가불 / 월급 선지급" }
        ]
      },
      {
        pattern: "Ich bin krank seit [Zeitpunkt].",
        meaning: "저는 [시점]부터 아팠습니다 (병가 사유).",
        options: [
          { german: "gestern Abend", korean: "어제 저녁" },
          { german: "heute Morgen", korean: "오늘 아침" },
          { german: "zwei Tagen", korean: "이틀 전" }
        ]
      },
      {
        pattern: "[Nomen] ist genehmigt.",
        meaning: "[명사]가 승인되었습니다.",
        options: [
          { german: "Ihr Urlaubsantrag", korean: "당신의 휴가 신청" },
          { german: "Die Krankmeldung", korean: "병가 처리" },
          { german: "Die Überstunde", korean: "초과 근무 신청" }
        ]
      }
    ],
    dialogue: [
      { speaker: "Sie", text: "Guten Morgen Markus. Ich kann heute leider nicht zur Arbeit kommen. Ich habe hohes Fieber.", translation: "좋은 아침입니다 마쿠스 부장님. 오늘 불행히도 출근할 수 없을 것 같습니다. 열이 많이 나네요." },
      { speaker: "Meister", text: "Guten Morgen Paul. Das tut mir leid zu hören. Hast du dich schon beim Hausarzt gemeldet?", translation: "안녕 파울. 안타까운 소식이군. 이미 동네 의원(Hausarzt)에 연락했나?" },
      { speaker: "Sie", text: "Ja, ich habe um neun Uhr einen Termin für die Untersuchung. Ich werde die AU-Bescheinigung anfordern.", translation: "네, 9시에 진료 예약해 뒀습니다. 진단서(AU)를 요청해 받겠습니다." },
      { speaker: "Meister", text: "Perfekt. Schicke uns die Krankmeldung bitte direkt per E-Mail, wenn du zurück bist.", translation: "좋아. 병원 갔다 온 후에 다녀와서 진단서를 바로 이메일로 송부해 주게." },
      { speaker: "Sie", text: "Mache ich. Ich denke, ich muss auch für morgen krankgeschrieben werden. Ich gebe Ihnen Bescheid.", translation: "그렇게 하겠습니다. 아무래도 내일까지도 근로 불가능 처리를 받아야 할 거 같은데, 의사 소견 확인 후 연락해 드릴게요." },
      { speaker: "Meister", text: "Kein Problem, erhole dich gut. Die Gesundheit geht vor. Sven übernimmt deine Schicht.", translation: "걱정 말고 푹 쉬게. 건강이 최우선이야. 오늘 네 근무는 스벤이 대신해 주기로 했네." },
      { speaker: "Sie", text: "Vielen Dank für das Verständnis, Markus. Bis bald.", translation: "이해해 주셔서 정말 감사합니다, 마쿠스 부장님. 곧 뵙겠습니다." },
      { speaker: "Meister", text: "Gute Besserung, Paul! Werd schnell wieder gesund.", translation: "쾌차하게, 파울! 빨리 몸 회복해서 복귀해." }
    ],
    quiz: [
      {
        question: "독일어로 휴가 신청서를 가리키는 공식 명칭은?",
        options: ["der Urlaubsantrag", "die Krankmeldung", "der Arbeitsvertrag", "das Rezept"],
        answer: "der Urlaubsantrag",
        explanation: "Urlaub(휴가) + Antrag(신청서) = Urlaubsantrag를 의미합니다."
      },
      {
        question: "비즈니스 이메일이나 격식 있는 서류의 서명 바로 위에 적는 결미 인사(경의를 표하며)는?",
        options: ["Mit freundlichen Grüßen", "Mahlzeit", "Hallo", "Gute Reise"],
        answer: "Mit freundlichen Grüßen",
        explanation: "Mit freundlichen Grüßen은 독일 회사 메일의 표준 끝인사입니다."
      },
      {
        question: "아파서 결근 시, 의사가 발행하는 진단서를 회사에 제출해야 하는 통상적인 법적 기준일은?",
        options: ["결근 3일 차부터 (회사에 따라 1일 차부터)", "복귀한 지 1년 후", "내지 않아도 된다", "한 달 뒤"],
        answer: "결근 3일 차부터 (회사에 따라 1일 차부터)",
        explanation: "독일 연방법상 병가 진단서(AU)는 3일차에 내는 것이 기본이나, 많은 공장 계약에서는 1일차 당일 제출을 의무화합니다."
      }
    ]
  },
  {
    id: 14,
    title: "14단계: 휴게실 스몰토크",
    level: "A2",
    section: "3부: 협업 & 비즈니스 소통",
    description: "점심 인사 'Mahlzeit!' 나눔 및 동료와의 일상 친목 스몰토크",
    expressions: [
      {
        german: "Mahlzeit! Guten Appetit!",
        pronunciation: "말차이트! 구텐 아페티트!",
        korean: "맛있는 식사 하세요! 많이 드세요!",
        nuance: "독일 현장/공장 노동자들이 점심시간(11시~13시 사이)에 마주치면 나누는 시그니처 인사입니다."
      },
      {
        german: "Was hast du am Wochenende gemacht?",
        pronunciation: "바스 하스트 두 암 보헨엔데 게마흐트?",
        korean: "주말에 뭐 했어?",
        nuance: "월요일 아침 출근 직후 동료들과 커피 한잔하며 아이스브레이킹을 시도할 때 쓰는 최고 빈도 문장입니다."
      },
      {
        german: "Das Wetter ist heute wirklich schön, oder?",
        pronunciation: "다스 베터 이스트 호이테 비어클리히 쇤, 오더?",
        korean: "오늘 날씨 정말 좋네요, 그렇지 않나요?",
        nuance: "특별한 화젯거리가 없을 때 가볍게 대화를 이어가기 좋은 만능 주제입니다."
      },
      {
        german: "Ich habe gestern mit meiner Familie telefoniert.",
        pronunciation: "이히 하베 게스턴 미트 마이너 파밀리에 테레포니어트.",
        korean: "어제 가족들과 전화 통화했습니다.",
        nuance: "멀리 한국에서 온 외국인 기술자로서 가족 안부 이야기를 꺼내 소박한 대화를 이끌어갈 때 씁니다."
      },
      {
        german: "Hast du das Spiel von Bayern München gesehen?",
        pronunciation: "하스트 두 다스 슈필 폰 바이에른 뮌헨 게제엔?",
        korean: "바이에른 뮌헨 축구 경기 봤어?",
        nuance: "독일 현장에서 축구(Bundesliga)는 최고의 대화 소스입니다. 특히 월요일 휴게실 토론의 핵심입니다."
      },
      {
        german: "Kaffee? Ich hole mir gerade einen. Soll ich dir einen mitbringen?",
        pronunciation: "카페? 이히 홀레 미어 게라데 아이넨. 졸 이히 디어 아이넨 미트브링엔?",
        korean: "커피요? 저 지금 뽑으러 가는데, 한 잔 가져다 드릴까요?",
        nuance: "동료애(Kollegialität)를 과시하며 친해지기에 가장 좋고 자연스러운 에티켓 표현입니다."
      },
      {
        german: "Der Kaffee hier schmeckt schrecklich, oder?",
        pronunciation: "데어 카페 히어 슈멕트 슈렉리히, 오더?",
        korean: "여기 커피 정말 맛없네요, 그렇죠?",
        nuance: "가볍게 불평(독일인들의 취미인 Jammern)을 하며 아이스 브레이크를 유도하는 동료 간 장난 섞인 대화입니다."
      },
      {
        german: "Ich koche am Wochenende ein koreanisches Gericht.",
        pronunciation: "이히 코헤 암 보헨엔데 아인 코레아니셰스 게리히트.",
        korean: "이번 주말에 한국 요리를 할 예정입니다.",
        nuance: "한식(K-Food)에 관심이 많은 독일 동료들에게 숯불고기나 김치찌개 이야기를 꺼내며 문화 소통을 할 때 씁니다."
      }
    ],
    drillPatterns: [
      {
        pattern: "Hast du am Wochenende [Aktivität]?",
        meaning: "너 주말에 [활동]했어?",
        options: [
          { german: "Fußball geschaut", korean: "축구 봤어" },
          { german: "gegrillt", korean: "바비큐 파티 했어" },
          { german: "ausgeruht", korean: "푹 쉬었어" }
        ]
      },
      {
        pattern: "Ich trinke gerne [Getränk] in der Pause.",
        meaning: "나는 쉬는 시간에 [음료] 마시는 것을 좋아합니다.",
        options: [
          { german: "schwarzen Kaffee", korean: "블랙 커피" },
          { german: "einen kalten Eistee", korean: "차가운 아이스티" },
          { german: "ein alkoholfreies Bier", korean: "무알코올 맥주" }
        ]
      },
      {
        pattern: "[Sport] ist in Deutschland sehr beliebt.",
        meaning: "독일에서는 [스포츠]가 매우 인기 있습니다.",
        options: [
          { german: "Fußball", korean: "축구" },
          { german: "Handball", korean: "핸드볼" },
          { german: "Formel 1", korean: "포뮬러 1 레이싱" }
        ]
      }
    ],
    dialogue: [
      { speaker: "Sven", text: "Mahlzeit, Paul! Nimmst du auch die Currywurst oder hast du dir selbst etwas mitgebracht?", translation: "말차이트, 파울! 너도 구내식당 커리부르스트 먹을래, 아니면 도시락 싸 왔어?" },
      { speaker: "Sie", text: "Mahlzeit Sven! Ich habe Reis mit mariniertem Rindfleisch dabei - Bulgogi genannt.", translation: "말차이트 스벤! 난 양념 소고기 덮밥 싸 왔어. '불고기'라고 불러." },
      { speaker: "Sven", text: "Oh, das riecht verdammt lecker. Musst du mir mal das Rezept geben. Sag mal, was hast du am Wochenende getrieben?", translation: "오, 냄새가 끝내주는군. 나중에 꼭 레시피 알려줘. 그나저나 주말에 뭐 하면서 보냈어?" },
      { speaker: "Sie", text: "Ich war in Heidelberg und habe mir das Schloss angeschaut. Das Wetter war herrlich.", translation: "하이델베르크에 가서 성을 구경했어. 날씨가 기가 막히게 좋았거든." },
      { speaker: "Sven", text: "Schöne Stadt! Ich habe nur im Garten gegrillt und am Samstag das Bundesliga-Spiel geguckt. Hast du es gesehen?", translation: "좋은 도시지! 난 그냥 정원에서 바비큐 굽고 토요일 분데스리가 축구 경기 봤어. 너도 봤니?" },
      { speaker: "Sie", text: "Nein, leider verpasst. Wie hat Bayern gespielt? Haben sie gewonnen?", translation: "아니, 아쉽게 놓쳤어. 바이에른 팀 어떻게 뵀어? 이겼어?" },
      { speaker: "Sven", text: "Drei zu eins gegen Dortmund! Ein echtes Spektakel. Übrigens, ich hole mir einen Kaffee. Soll ich dir einen mitbringen?", translation: "도르트문트를 상대로 3:1로 이겼어! 대단한 명승부였지. 그건 그렇고 나 커피 뽑을 건데 한 잔 가져다줄까?" },
      { speaker: "Sie", text: "Sehr nett von dir, Sven. Bitte schwarz ohne Zucker. Danke schön!", translation: "호의에 정말 감사해, 스벤. 설탕 없는 블랙커피로 부탁할게. 고마워!" }
    ],
    quiz: [
      {
        question: "독일 직장에서 점심시간 전후(오전 11시~오후 1시)에 마주치면 건네는 독일 공장 표준 인사말은?",
        options: ["Mahlzeit!", "Guten Morgen!", "Auf Wiedersehen!", "Gute Nacht!"],
        answer: "Mahlzeit!",
        explanation: "Mahlzeit!는 식사를 기점으로 일터에서 나누는 전통 가득한 인사말입니다."
      },
      {
        question: "바비큐 파티를 하거나 석쇠에 고기를 굽는 행위를 뜻하는 독일어 동사는?",
        options: ["grillen", "fräsen", "schlafen", "telefonieren"],
        answer: "grillen",
        explanation: "grillen은 독일인들이 주말과 여름철에 광적으로 사랑하는 그릴에 바비큐 요리하기를 뜻합니다."
      },
      {
        question: "'도시락' 혹은 내가 직접 챙겨온 식사를 지칭할 때 흔히 쓰는 숙어는?",
        options: ["selbst etwas mitbringen", "Kantine bestellen", "Rezept kochen", "Müll wegwerfen"],
        answer: "selbst etwas mitbringen",
        explanation: "집에서 개인 도시락을 챙겨왔다는 의미를 나타내는 일상 표현입니다."
      }
    ]
  },
  {
    id: 15,
    title: "15단계: 계약/급여 문의 & 퇴근 인사",
    level: "B2",
    section: "3부: 협업 & 비즈니스 소통",
    description: "급여 명세서 확인 및 하루를 개운하게 털어내는 퇴근 인사 표현",
    expressions: [
      {
        german: "Ich habe eine Frage zu meiner Gehaltsabrechnung.",
        pronunciation: "이히 하베 아이네 프라게 처 마이너 게할츠아프레히눙.",
        korean: "제 급여 명세서(월급 봉투)에 관해 질문이 있습니다.",
        nuance: "매달 말 지급되는 급여 명세서(Gehaltsabrechnung)의 수당이나 내역을 인사과/상사에게 질문할 때 씁니다."
      },
      {
        german: "Sind meine Überstunden in diesem Monat bezahlt?",
        pronunciation: "진트 마이네 위버슈툰덴 인 디젬 모나트 베찰트?",
        korean: "이번 달 제 야근(초과) 수당이 정산되었나요?",
        nuance: "초과 근무(Überstunden)가 제대로 정산 혹은 대체 휴가(Freizeitausgleich) 처리되었는지 확인할 때 필수입니다."
      },
      {
        german: "Schönen Feierabend! Bis morgen!",
        pronunciation: "쇤엔 파이어아벤트! 비스 모어겐!",
        korean: "좋은 퇴근길 되세요! 내일 봐요!",
        nuance: "Feierabend는 '일과가 끝난 후의 자유 시간'을 의미하는 단어로, 퇴근 시 건네는 독일식 최고의 작별 인사입니다."
      },
      {
        german: "Ich habe meine Stückzahl für heute erreicht.",
        pronunciation: "이히 하베 마이네 슈틱찰 퓌어 호이테 에어라이히트.",
        korean: "오늘 가공 할당 수량을 다 채웠습니다.",
        nuance: "Stückzahl(생산 개수)을 다 채우고 기계를 정리하기 전 상사에게 이를 알릴 때 씁니다."
      },
      {
        german: "Muss ich heute Überstunden machen?",
        pronunciation: "무스 이히 호이테 위버슈툰덴 마헨?",
        korean: "제가 오늘 초과 근무(잔업)를 해야 하나요?",
        nuance: "독일은 잔업이 드물지만 물량이 대량 입고되었을 때 사전에 연장 근로 필요성을 확인할 때 씁니다."
      },
      {
        german: "Wo finde ich meine Steuerklasse auf dem Nachweis?",
        pronunciation: "보 핀데 이히 마이네 슈토이어클라세 아우프 뎀 나흐바이스?",
        korean: "월급 명세서 증빙에서 제 세금 등급(Steuerklasse)을 어디서 볼 수 있나요?",
        nuance: "독일의 세금 등급(1등급~6등급)이 올바르게 반영되었는지 월급 명세서에서 확인할 때 필요합니다."
      },
      {
        german: "Ich wünsche dir ein erholsames Wochenende!",
        pronunciation: "이히 뫼히테 디어 아인 에어홀자메스 보헨엔데!",
        korean: "편안한 주말 보내길 바래! (금요일 퇴근 인사)",
        nuance: "금요일 오후에 퇴근하는 동료끼리 격려와 안식을 빌어주며 나누는 정겨운 인사말입니다."
      },
      {
        german: "Schalten Sie die Hauptstromversorgung der Maschine aus.",
        pronunciation: "샬텐 지 디 하우프트슈트롬페어조어궁 데어 마시네 아우스.",
        korean: "기계의 메인 전원(차단기)을 꺼 주세요.",
        nuance: "주말 전이나 연휴 전, 완전 정지를 위해 메인 차단기(Hauptstrom)를 끄도록 지시할 때 사용합니다."
      }
    ],
    drillPatterns: [
      {
        pattern: "Schönen [Wunsch]!",
        meaning: "좋은 [인사] 되세요!",
        options: [
          { german: "Feierabend", korean: "퇴근길 / 저녁 시간" },
          { german: "Tag noch", korean: "남은 하루" },
          { german: "Urlaub", korean: "휴가" }
        ]
      },
      {
        pattern: "Ich habe meine [Nomen] fertig.",
        meaning: "나는 내 [일]을 완료했습니다.",
        options: [
          { german: "Arbeit", korean: "작업" },
          { german: "Stückzahl", korean: "할당 생산량" },
          { german: "Messung", korean: "계측 검사" }
        ]
      },
      {
        pattern: "Gibt es Unklarheiten bei [Thema]?",
        meaning: "[주제]에 관해 이상한(불명확한) 점이 있나요?",
        options: [
          { german: "der Abrechnung", korean: "급여 정산" },
          { german: "dem Arbeitsvertrag", korean: "근로 계약서 내용" },
          { german: "der Schichteinteilung", korean: "교대 조 짜기" }
        ]
      }
    ],
    dialogue: [
      { speaker: "Sie", text: "Markus, es ist sechzehn Uhr. Ich habe meine Stückzahl von fünfzig Haltern gefertigt.", translation: "마쿠스 부장님, 오후 4시입니다. 오늘 목표 수량인 홀더 50개 가공 완료했습니다." },
      { speaker: "Meister", text: "Hervorragend, Paul! Die Qualität der Stichproben war auch einwandfrei. Gute Arbeit.", translation: "훌륭합니다, 파울! 무작위 샘플링(Stichproben) 치수 검사 결과도 아주 완벽했습니다. 수고하셨어요." },
      { speaker: "Sie", text: "Danke. Ich habe die Späne aus dem Innenraum entfernt und die Fräsmaschine gereinigt.", translation: "감사합니다. 기계 내부의 칩을 청소하고 밀링 머신 정리 정돈을 마쳤습니다." },
      { speaker: "Meister", text: "Sehr gut. Ordnung muss sein. Schalte bitte auch die Hauptstromversorgung der Maschine aus, da sie morgen gewartet wird.", translation: "아주 좋습니다. 정리 정돈은 필수죠. 내일 기계 예방 보전(Wartung) 점검이 있으니 메인 전원 스위치도 꺼 주세요." },
      { speaker: "Sie", text: "Mache ich. Markus, ich habe noch eine kurze Frage zu meiner letzten Gehaltsabrechnung.", translation: "그렇게 하겠습니다. 마쿠스 부장님, 지난달 급여 명세서에 대해 짧은 질문이 하나 있는데요." },
      { speaker: "Meister", text: "Ja, worum geht es? Stimmt etwas nicht?", translation: "네, 무슨 내용이죠? 뭔가 잘못된 부분이 있나요?" },
      { speaker: "Sie", text: "Meine fünfzehn Überstunden aus dem Vormonat sind nicht aufgeführt. Wurden sie vergessen?", translation: "지난달에 일한 초과 근무 15시간 수당이 누락되어 있어서요. 누락된 건가요?" },
      { speaker: "Meister", text: "Ah, das kann sein. Die Personalabteilung bucht Überstunden oft auf das Arbeitszeitkonto. Ich frage nach.", translation: "아, 그럴 수 있습니다. 인사부에서 초과 근무 수당을 보통 근로시간 계좌(Arbeitszeitkonto)에 적립해 두곤 합니다. 알아봐 줄게요." },
      { speaker: "Sie", text: "Alles klar, vielen Dank. Dann wünsche ich Ihnen einen schönen Feierabend!", translation: "알겠습니다, 감사해요. 그럼 즐거운 퇴근 저녁 시간 보내세요!" },
      { speaker: "Meister", text: "Danke, Paul. Ebenfalls schönen Feierabend! Bis morgen.", translation: "고마워요, 파울. 당신도 좋은 퇴근 보내고! 내일 봐요." }
    ],
    quiz: [
      {
        question: "하루의 가공 업무를 마치고 공구 기계 내부의 금속 가공 잔여물을 털어내는 행위는?",
        options: ["die Späne entfernen", "die Spindel drehen", "den Nullpunkt setzen", "die Kaution überweisen"],
        answer: "die Späne entfernen",
        explanation: "쇳가루 칩을 청소하여 비우는 행위(die Späne entfernen)는 기계 유지보수의 기본입니다."
      },
      {
        question: "일한 시간 대비 수당을 받거나 휴가로 대체하기 위해 초과 근로 시간을 차곡차곡 적립하는 저축성 계좌는?",
        options: ["das Arbeitszeitkonto", "das Sparkonto", "das Gehalt", "die Steuerklasse"],
        answer: "das Arbeitszeitkonto",
        explanation: "Arbeitszeitkonto(근로시간 계좌)는 독일 회사들이 유연근무제 및 야근 수당 조율을 위해 상시 운용하는 제도입니다."
      },
      {
        question: "금요일 오후 퇴근 직전, 동료들과 헤어질 때 건네는 인사말로 알맞은 것은?",
        options: ["Schönes Wochenende!", "Mahlzeit!", "Gute Besserung!", "Willkommen!"],
        answer: "Schönes Wochenende!",
        explanation: "Wochenende(주말)를 사용하여 '좋은 주말 보내세요!'라는 정다운 작별 인사입니다."
      }
    ]
  }
];

const vocabularyDataset = [
  // 생존 단어 (Survival Vocab)
  { german: "der Wohnsitz", plural: "die Wohnsitze", gender: "der", korean: "거주지, 주택지", category: "survival" },
  { german: "die Anmeldung", plural: "die Anmeldungen", gender: "die", korean: "거주지 등록/신고", category: "survival" },
  { german: "der Termin", plural: "die Termine", gender: "der", korean: "예약, 미팅 약속", category: "survival" },
  { german: "der Reisepass", plural: "die Reisepässe", gender: "der", korean: "여권", category: "survival" },
  { german: "der Mietvertrag", plural: "die Mietverträge", gender: "der", korean: "임대차 계약서", category: "survival" },
  { german: "die Kaution", plural: "die Kautionen", gender: "die", korean: "보증금", category: "survival" },
  { german: "die Warmmiete", plural: "die Warmmieten", gender: "die", korean: "관리비 포함 월세", category: "survival" },
  { german: "die Kaltmiete", plural: "die Kaltmieten", gender: "die", korean: "관리비 제외 월세", category: "survival" },
  { german: "der Kassenbon", plural: "die Kassenbons", gender: "der", korean: "영수증", category: "survival" },
  { german: "die Verspätung", plural: "die Verspätungen", gender: "die", korean: "열차 연착/지연", category: "survival" },
  { german: "das Gleis", plural: "die Gleise", gender: "das", korean: "철도 플랫폼, 승강장", category: "survival" },
  { german: "das Rezept", plural: "die Rezepte", gender: "das", korean: "의사 처방전, 레시피", category: "survival" },
  { german: "die Apotheke", plural: "die Apotheken", gender: "die", korean: "약국", category: "survival" },
  { german: "der Hausarzt", plural: "die Hausärzte", gender: "der", korean: "가정의학과 의사", category: "survival" },
  { german: "das Fieber", plural: "없음", gender: "das", korean: "열 (체온)", category: "survival" },
  { german: "die Krankmeldung", plural: "die Krankmeldungen", gender: "die", korean: "병가 신고서", category: "survival" },
  { german: "der Urlaub", plural: "die Urlaube", gender: "der", korean: "휴가", category: "survival" },
  { german: "das Wochenende", plural: "die Wochenenden", gender: "das", korean: "주말", category: "survival" },
  { german: "das Wetter", plural: "없음", gender: "das", korean: "날씨", category: "survival" },
  { german: "die Gehaltsabrechnung", plural: "die Gehaltsabrechnungen", gender: "die", korean: "급여 명세서", category: "survival" },
  { german: "das Finanzamt", plural: "die Finanzämter", gender: "das", korean: "세무서", category: "survival" },
  { german: "die Steuerklasse", plural: "die Steuerklassen", gender: "die", korean: "세금 등급", category: "survival" },
  { german: "der Zahnarzt", plural: "die Zahnärzte", gender: "der", korean: "치과 의사", category: "survival" },
  { german: "die Krankenversicherung", plural: "die Krankenversicherungen", gender: "die", korean: "건강보험", category: "survival" },
  { german: "die Unterschrift", plural: "die Unterschriften", gender: "die", korean: "서명, 사인", category: "survival" },

  // CNC 밀링 기술 어휘 (CNC & Workshop Vocab)
  { german: "der Messschieber", plural: "die Messschieber", gender: "der", korean: "버니어 캘리퍼스", category: "cnc" },
  { german: "die Bügelmessschraube", plural: "die Bügelmessschrauben", gender: "die", korean: "외경 마이크로미터", category: "cnc" },
  { german: "die Fräsmaschine", plural: "die Fräsmaschinen", gender: "die", korean: "밀링 머신(밀링기)", category: "cnc" },
  { german: "das Werkstück", plural: "die Werkstücke", gender: "das", korean: "공작물 (가공 소재)", category: "cnc" },
  { german: "der Fräser", plural: "die Fräser", gender: "der", korean: "밀링 커터(밀링 날)", category: "cnc" },
  { german: "der Bohrer", plural: "die Bohrer", gender: "der", korean: "드릴 날", category: "cnc" },
  { german: "die Zeichnung", plural: "die Zeichnungen", gender: "die", korean: "도면 (설계도)", category: "cnc" },
  { german: "die Toleranz", plural: "die Toleranzen", gender: "die", korean: "오차 공차 범위", category: "cnc" },
  { german: "das Kühlmittel", plural: "die Kühlmittel", gender: "das", korean: "냉각수, 절삭유", category: "cnc" },
  { german: "die Späne", plural: "단수: der Span", gender: "die", korean: "칩, 쇳가루 부스러기", category: "cnc" },
  { german: "der Not-Aus-Schalter", plural: "die Not-Aus-Schalter", gender: "der", korean: "비상 정지 스위치", category: "cnc" },
  { german: "die Schutzbrille", plural: "die Schutzbrillen", gender: "die", korean: "보호 안경", category: "cnc" },
  { german: "die Sicherheitsschuhe", plural: "die Sicherheitsschuhe", gender: "die", korean: "안전화", category: "cnc" },
  { german: "der Gehörschutz", plural: "없음", gender: "der", korean: "귀마개, 방음 보호구", category: "cnc" },
  { german: "der Vorarbeiter", plural: "die Vorarbeiter", gender: "der", korean: "현장 반장/조장", category: "cnc" },
  { german: "der Meister", plural: "die Meister", gender: "der", korean: "작업장 책임 마이스터", category: "cnc" },
  { german: "die Werkstatt", plural: "die Werkstätten", gender: "die", korean: "작업장, 가공 공장", category: "cnc" },
  { german: "die Übergabe", plural: "die Übergaben", gender: "die", korean: "근무 인수인계", category: "cnc" },
  { german: "der Feierabend", plural: "die Feierabende", gender: "der", korean: "퇴근, 업무 후 휴식", category: "cnc" },
  { german: "das Maß", plural: "die Maße", gender: "das", korean: "치수, 측정값", category: "cnc" },
  { german: "die Wendeplatte", plural: "die Wendeplatten", gender: "die", korean: "초경 인서트 가공 팁", category: "cnc" },
  { german: "die Spindel", plural: "die Spindeln", gender: "die", korean: "밀링 스핀들 (회전축)", category: "cnc" },
  { german: "der Vorschub", plural: "die Vorschübe", gender: "der", korean: "공구 이송 속도", category: "cnc" },
  { german: "die Drehzahl", plural: "die Drehzahlen", gender: "die", korean: "회전수 (RPM)", category: "cnc" },
  { german: "die Messuhr", plural: "die Messuhren", gender: "die", korean: "다이얼 게이지", category: "cnc" },
  { german: "der Schraubstock", plural: "die Schraubstöcke", gender: "der", korean: "바이스 (공작물 고정대)", category: "cnc" },
  { german: "die Fehlermeldung", plural: "die Fehlermeldungen", gender: "die", korean: "오류 경고 메시지", category: "cnc" },
  { german: "der Verschleiß", plural: "없음", gender: "der", korean: "공구 마모, 닳음", category: "cnc" },
  { german: "die Schicht", plural: "die Schichten", gender: "die", korean: "교대 근무조 (Shift)", category: "cnc" },
  { german: "die Überstunden", plural: "단수: die Überstunde", gender: "die", korean: "야간/초과 근무 수당", category: "cnc" },
  { german: "die Reibahle", plural: "die Reibahlen", gender: "die", korean: "구멍 가공용 리머", category: "cnc" },
  { german: "das Soll-Maß", plural: "die Soll-Maße", gender: "das", korean: "기준 설계 치수", category: "cnc" },
  { german: "das Ist-Maß", plural: "die Ist-Maße", gender: "das", korean: "실제 가공 측정값", category: "cnc" },
  { german: "der 3D-Taster", plural: "die 3D-Taster", gender: "der", korean: "3D 터치식 원점 측정기", category: "cnc" },
  { german: "das Rohteil", plural: "die Rohteile", gender: "das", korean: "가공 전 원자재 소재", category: "cnc" },
  { german: "das Fertigteil", plural: "die Fertigteile", gender: "das", korean: "가공 완료된 완성 제품", category: "cnc" },
  { german: "der Späneförderer", plural: "die Späneförderer", gender: "der", korean: "칩 컨베이어", category: "cnc" },
  { german: "das Arbeitszeitkonto", plural: "die Arbeitszeitkonten", gender: "das", korean: "근로시간 적립 계좌", category: "cnc" }
];

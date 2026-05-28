// 네이버 실리뷰 — 닉네임과 날짜는 원본 그대로, 본문은 영어·일본어 번역을 같이 보관
import type { LangString } from '../i18n/types';

export type Review = {
  id: number;
  nickname: string;
  date: string;
  body: LangString;
};

const rev = (ko: string, en: string, ja: string): LangString => ({ ko, en, ja });

export const reviews: Review[] = [
  {
    id: 1,
    nickname: '러블리미',
    date: '2026.01.24',
    body: rev(
      '일단 고기가 좋아서 삼겹살부터 삼두박살 고소함 가득에 맛있구요 거기에 어울리는 반찬까지 최고에요 또 직원분들이 전부 친절해서 반하고 또 오고 싶은 곳이랍니다 가성비 좋은 사상 고기집 찾는다면 들려보세요!',
      "The pork itself is great — from the belly to the samdubaksal, every bite is full of flavor. The side dishes pair beautifully, and the staff are all so kind I keep wanting to come back. If you're looking for a Sasang BBQ spot with great value, drop by!",
      'まずお肉が良く、三枚肉からサムドゥパクサルまで香ばしくて美味しい。合う副菜も完璧で、スタッフさんも皆親切。コスパの良い沙上の焼肉なら、ぜひ寄ってみて！',
    ),
  },
  {
    id: 2,
    nickname: '노진',
    date: '2025.10.06',
    body: rev(
      '삼겹살 질이 진짜 좋으니깐 사상에서 삼겹 땡기면 육마당 추천드려요 사실 고기 추가해서 더 먹고 된찌도 먹었는데 조카 본다고 사진 못찍었어요 흑흑',
      'The belly quality is genuinely top-tier — if you crave samgyeopsal in Sasang, Yukmadang is my pick. I ended up ordering extra meat and the soybean stew too, but my niece kept me too busy for photos.',
      '三枚肉の質が本当に良くて、沙上で三枚肉が食べたいなら육마당（ユクマダン）です。追加注文してチゲも頼んだのに、姪を見ていて写真が撮れず…。',
    ),
  },
  {
    id: 3,
    nickname: '정아로그',
    date: '2025.08.23',
    body: rev(
      '참숯 향이 은은하게 스며든 삼겹살은 한 입 먹는 순간 고소함과 육즙이 입안 가득 퍼져서 절로 감탄이 나왔어요. 겉은 바삭하고 속은 촉촉해서 식감까지 완벽! 특히 소금에 살짝 찍어 먹으면 고기 본연의 풍미가 그대로 느껴졌답니다.',
      'Charcoal smoke had soaked deep into the belly — one bite and a wave of richness and juice filled my mouth. Crisp outside, tender inside. With just a pinch of salt the pure pork flavor came through.',
      '備長炭の香りが豚バラに染み込み、一口で旨みと肉汁が口いっぱいに。外はカリッ、中はしっとり。塩を少しつけるだけで肉本来の風味が広がります。',
    ),
  },
  {
    id: 4,
    nickname: '수동나라',
    date: '2025.06.07',
    body: rev(
      '고기는 대표 메뉴인 삼겹살과 목살을 주문했는데, 고기 두께부터 남달랐어요. 두툼하게 썰린 삼겹살이 숯불에 지글지글 익어가는데, 육즙이 그대로 살아있어서 보기만 해도 군침이 돌더라고요. 직원분이 직접 구워주시기도 해서 더 편하게 먹을 수 있었어요.',
      'I ordered the signature belly and neck. The thickness alone is special — chunky cuts sizzling on charcoal, juices intact. The staff grilled them at the table so I could relax and enjoy.',
      '看板メニューの三枚肉と肩ロースを注文。厚みからして違います。分厚いお肉が炭の上でジュージュー、肉汁そのまま。スタッフさんが焼いてくれるので楽でした。',
    ),
  },
  {
    id: 5,
    nickname: '김쩝박이',
    date: '2025.06.16',
    body: rev(
      '뭘먹을지 고민하다가 마당한판씩 각테이블에 주문했습니다 삼겹 목살 삼두박살 이렇게 특수부위가 같이 들어가 있구요 단품으로도 파니 참고하세요',
      'We split into tables and ordered a full Madang set each. Belly, neck, and samdubaksal all come together — they also sell each cut à la carte, just so you know.',
      '迷った末、テーブルごとに「マダン定食」を注文。三枚肉・肩ロース・サムドゥパクサルなど希少部位が一緒に入っています。単品もあるのでご参考に。',
    ),
  },
  {
    id: 6,
    nickname: '프리랜서마케터 을림',
    date: '2026.04.23',
    body: rev(
      '먹다 보니 배가 좀 찼는데도 밥이나 면으로 마무리를 꼭 해야 해서 촌된장찌개를 추가로 주문했어요 일반 식당의 된장찌개랑은 달라 시골 할머니 집에서 먹는 듯한 구수하고 깊은 맛입니다. 먹어보면 왜 촌 된장찌개인 줄 알게 되실 거예요',
      "I was already full but couldn't skip a finishing bowl, so I added the country soybean stew. It's nothing like an ordinary doenjang-jjigae — deep and rustic, like a real grandma's table. One spoon and the name makes sense.",
      'お腹が満たされても、しめは外せず田舎味噌チゲを追加。普通の味噌チゲとは違い、田舎のおばあちゃんの家のような深い旨み。一口で「田舎」の理由が分かります。',
    ),
  },
  {
    id: 7,
    nickname: 'subely',
    date: '2025.12.11',
    body: rev(
      '젊고 친절하신 사장님 그리고 친절한 직원분들 완벽해... 고기도 맛있는데 식사 종류도 넘나리 맛이가 좋음!',
      'A young, warm owner and lovely staff — just perfect. The meat is great, and the rice/noodle finishes are just as good!',
      '若く親切な店主さんとスタッフさん、もう完璧。お肉も美味しいし、しめのご飯や麺類も最高！',
    ),
  },
  {
    id: 8,
    nickname: '갱이2162',
    date: '2026.03.09',
    body: rev(
      '여기는 사장님 마인드도 너무 좋으시고 직원분들도 빠릿하게 다니시면서 다 챙겨주시고 고기맛은 말모말모~말해뭐해~고기 질도좋고 맛도좋고 다구워주시니까 또 편한데 가격은 비싸지않아서 부담없고. 너무 좋네요!! 자주가고싶은 가게 1위 등극입니당.',
      "The owner has such a great mindset, the staff are super attentive — and the pork? Words fail. Top quality, great flavor, all grilled for you, and the price stays friendly. Just my new #1 place to keep coming back to.",
      '店主さんの姿勢が素晴らしく、スタッフさんもテキパキ。お肉は言わずもがな、品質も味も最高。全部焼いてくれて楽なのに価格も控えめ。再訪したいお店ランキング1位です。',
    ),
  },
  {
    id: 9,
    nickname: '빵쑨웅니',
    date: '2026.02.28',
    body: rev(
      '제가 리뷰를 원래 잘 안쓰는데 여기는 진짜 너무너무 쓰고싶은 맛집이에요 고기 질이 일단 최고에요 고기 누린맛 하나도 안나고 이가격에 이렇게 맛있는 고기를 먹을 수 있다는게 너무 행복했어요. 그리고 촌된장이 진짜 미쳤어요 여태 먹은 고깃집 된찌 중에 최고였어요. 정말 단골되고 싶다는 생각이 드는 집이였습니다!!',
      "I rarely leave reviews, but I had to here. The pork quality is just incredible — zero gaminess, and at this price, eating something this good felt like a steal. The country soybean stew is unreal — the best BBQ-house jjigae I've ever had. A place I genuinely want to be a regular at.",
      '普段はレビューを書かない私ですが、ここはどうしても書きたいお店。お肉の質は最高、臭みゼロで、この値段でここまで美味しいなんて。田舎味噌チゲも本当にすごい。今まで食べた焼肉屋の中で一番。常連になりたいお店です。',
    ),
  },
  {
    id: 10,
    nickname: '바비돌뷰티샵',
    date: '2026.03.15',
    body: rev(
      '특수부위 좋아하는데 해운대에서 이사와서 맛집찾다가 발견! 가격도 착해요. 직원분들 너~~~무 친절해서 첫방문인데 제가 여기 단골인줄알았어요. 반찬하나하나 간이 딱좋고 감칠맛을 더 도와줍니다. 미취학아동 애기밥 무료~ 최고입니다.',
      'I love special cuts and just moved from Haeundae — I found this place while hunting for somewhere good. Friendly prices and the staff were SO warm I felt like a regular on day one. Each side dish was perfectly seasoned, and rice is free for preschoolers. Top marks.',
      '希少部位が好きで、海雲台から引っ越して맛집（おいしいお店）を探していたら見つけました！価格もお手頃で、スタッフさんがとても親切で、初回なのに常連気分。副菜の塩加減もちょうど良く旨みを引き立てます。未就学児はご飯無料、最高です。',
    ),
  },
];

export const reviewKeywords = [
  { idx: 0, count: 318 },
  { idx: 1, count: 307 },
  { idx: 2, count: 186 },
  { idx: 3, count: 117 },
  { idx: 4, count: 111 },
  { idx: 5, count: 74 },
  { idx: 6, count: 66 },
  { idx: 7, count: 51 },
  { idx: 8, count: 48 },
  { idx: 9, count: 34 },
];

export const reviewStats = {
  visitorReviews: 343,
  blogReviews: 182,
};

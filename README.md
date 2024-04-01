[한터글로벌] 서비스개발실 프론트엔드 개발자 신입 코딩테스트

## React 로 구현하는 콘텐츠 뷰 ##

**SKILL**
* React, TypeScript
  
**Library**
* swiper, axios, react-router-dom

**요구 사항**
* React 를 사용하여 구현
* 카테고리 - “차트”, “Whook”, “이벤트”, “뉴스”, “스토어”, “충전소” 별로 동일한 리스트 페이지가 구현
* 카테고리에 속한 콘텐츠는 리스트형 뷰로 구성되고, 무한 스크롤이 가능한 형태
* 카테고리간 이동은 상단의 탭 메뉴 클릭과, 좌<->우 슬라이드 터치를 통해서만 가능
* 중단의 배너 영역은 슬라이드형이며, 최소 3개의 배너로 구성하고 무한루프 동작 및 외부 링크 이동이 가능
* 해상도는 width 425px 에 최적화

**목표**
* 컴포넌트의 재사용성, 확장성
* 유지보수성을 높이기 위한 프로젝트 및 코드 구성
* UI/UX 개선 (필수 X)

**프로젝트 실행**
1. 의존성 설치 : 프로젝트 루트 디렉토리에서 터미널을 열고 `npm install` 명령어를 실행하여 설치해주세요
2. 로컬 서버 실행 : 설치 후 `npm start`명령어를 사용하여 로컬 서버를 실행해주세요
3. 브라우저에서 `localhost:3000`으로 이동하여 확인해주세요.

**기능 구현**
* Infinite scroll : List
   * IntersectionObserver API 사용
   * 페이지 안에서 구현하였으나, 가독성 및 추가적인 재사용 가능성을 염려하여 커스텀 훅으로 분리
   * 커스텀 훅을 호출하고 API 주소를 인자로 전달하여 사용할 수 있음
   * List 컴포넌트에서 사용 중이며, List Item에 따라 다르게 활용이 가능
   * List는 무한 스크롤을 지원하는 List를 생성 함 (현재는 이미지와, 차트, 일반 목록으로 사용 중)
  
* Page Routing : 좌우 슬라이드 터치
  * 리액트 라우터 돔 라이브러리의 useNavigate, useLocation 활용 커스텀 훅으로 처리
  * 각 페이지의 Paths를 배열화 하여, 사용자가 모바일에서 드래그하면 현재 페이지에서 Index를 사용하여 이동
  * 훅 사용시 routes의 Paths의 정보가 담긴 배열 필요 (순서대로 작성해야 함)
  
* Infinite rolling slider
  * swiper 라이브러리 사용, 2초 간격으로 자동 슬라이드 및 무한 루프 기능 활성화

* 헤더 & 탑 버튼 스크롤 업/다운시 효과
  * 스크롤바가 내려갈 경우 헤더와 탑 버튼을 보이지 않도록 처리 (반대로 올라갈 경우 보이도록 함)
  * Template Component에서 스크롤바를 감지하는 함수 구현
  * isVisible 상태를 통해 Header, Footer 컴포넌트 제어
 
* 콘텐츠 큐레이션 (tab menu)
  * tab 메뉴의 정보를 담은 배열로 버튼을 만들고, 버튼을 클릭할 경우 관련 된 데이터를 호출
  * 페이지 이동을 하지 않고 List 컴포넌트에 새로운 데이터를 가져올 수 있도록 함
 
* Banner Card
  * 배너에 들어가는 이미지의 경우, 한 개의 컴포넌트로 다양하게 표현할 수 있도록 구현
  * 진행 상황, 타이틀, 버튼, 부가 설명 등 정해진 문구가 아닌, 사용자가 원하는 텍스트를 직접 삽입하여 사용 가능
  * ex) Text(title,duration 등)가 없고, img Url, Url만 존재할 경우 사진만 보여지며 클릭할 경우 Url로 이동
  * 배너 외부/내부 이동: URL의 http를 구분하여 내/외부 링크를 확인하고 <a> 또는 <Link>를 사용하여 이동

**추가**
* Open API: 무한 스크롤 구현에 필요한 임시 데이터 (고양이, 강아지 사진)

**컴포넌트 및 폴더 구조**
- components : 각 페이지 및 레이아웃에서 사용할 컴포넌트들
  - BannerSlider
    - index : Swiper라이브러리 활용, 배너의 슬라이드 처리
    - BannerCard : 배너에서 사용 될 카드 (이미지 및 텍스트 처리)
  - List : ListItem들을 무한 스크롤 리스트로 출력하기 위한 컴포넌트
    - ImgCardListItems : List에서 항목을 이미지로 처리할 때 사용
    - ListItems : 기본적으로 사용한 List Item, 차트와 노멀로 구분하여 사용 가능
  - TabMenu : 카테고리별 내부 메뉴 (페이지 이동 X)
  - TopButton : 웹 브라우저 최상단으로 올라가기 위한 버튼
- constants : 코드에서 필요한 상수 모음
  - classNames.tsx : App.css에서 사용하는 className
  - constants.tsx : 기타 상수
  - openAPIs.tsx : 테스트를 위해 사용한 openAPI
  - paths.tsx : Router 경로
  - tabMenu.tsx : TabMenu에서 사용될 객체들이 있음
- hooks
  - useInfiniteScroll : 무한 스크롤을 위한 커스텀 훅
  - useSwipeNabvigation : 모바일 사용 시, 탭드래그를 통해 각 카테고리로 이동하기 위한 커스텀 훅
- layout
  - Footer
  - HeaderNavBar : 카테고리별 네비게이션 바
- page : 각 가테고리별 Page
  - Charge / Chart / Event / News / Store / Whook : 각페이지의 구성을 담당
  - Template : Layout Template
- types : 필요한 타입들을 정의
  - dataType.tsx : Open API, BannerData 타입을 가지고 있음 (데이터 관련)
  - tab.tsx : TabMenu에서 사용할 항목의 타입
- Router.tsx : Router path
- testDatas.ts : 배너에 필요한 임시 테스트 데이터 (임의 작성)

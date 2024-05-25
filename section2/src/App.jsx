import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


// 클래스 컴포넌트
// 코드 많아져서 거의 안쓰임
// 함수 컴포넌트 (함수가 있고 함수가 html 태그를 반환, 빠르고 간결)




function App() {
  return (
    <>
      <Header/>
      <Body/>
      <Footer/>
    </>
  )
}

export default App
import React from 'react'
import Profile from "../components/Profile/Profile";
import Navbar from '../components/Navbar/Navbar'
import ChatApp from '../components/Chat/ChatApp'
import { Container } from '../components/grid/grid';
import Footer from "../components/footer/footer"

function ProfilePage(props) {
  return (
    <div>
      <Navbar/>
      <ChatApp/>
      <Container>
        <Profile {...props} />
      </Container>
      <Footer></Footer>
    </div>
  )
}
export default ProfilePage;

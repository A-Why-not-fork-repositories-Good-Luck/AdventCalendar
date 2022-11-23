import { dbService } from "fbase";
import styled from 'styled-components';
import Hotel from '../components/Hotel';
import { RedButton, CircleButton } from './styles/buttonstyle';
import HotelSnow from '../assets/SnowHotel.svg';
import { useEffect, useState } from 'react';
import { useHistory, Link } from "react-router-dom";
import NoRoofwall from '../assets/NoRoofWall.svg';

const HotelColor = ({userObj}) => {
    const history = useHistory();
    let roofColor = "";
    let bodyColor = "";

    const setRoofColor = (name) => {
        document.getElementById("roof1").style.fill=name;
        document.getElementById("roof2").style.fill=name;
    }

    const changeRoof = (event) => {
        const {target: {name}} = event;
        setRoofColor(name);
        roofColor = name;
    }

    const setBodyColor = (name) => {
        document.getElementById("body").style.fill=name;
    }

    const changeBody = (event) => {
        const {target: {name}} = event;
        setBodyColor(name);
        bodyColor = name;
    }

    const onSubmit = async (event) => {
        // event.preventDefault();
        // await dbService.collection("hotelOwner").doc(userObj.uid).update({nickname : nickname});
        // history.push("/hotel/" + userObj.uid);
    }

    useEffect( () => {
        dbTest();

    }, []);

    const dbTest= async() => {
        let data = "";
        //await dbService.collection("hotelOwner").doc(userObj.uid).update({nickname : nickname});
        await dbService.collection("hotelOwner").doc(userObj.uid)
        .get()
        .then((doc) => {data = doc.data()});
        console.log(data);
        console.log(data["nickname"]);
    }

  return (
      <>
        <Container>
            <div style={{
                marginTop: "141px",
                height: "29px",
                fontSize: "20px",
                fontWeight: "500px",
                position:"relative",
            }}>
                내 호텔은 무슨 색인가요?
            </div>
            
            <ColorHotelLayout>
                <RoofLayout>
                    <svg width="169" height="56" viewBox="0 0 169 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="roof1" d="M1.03595 40.5715L17.3368 20.0576H84.3598H151.384L167.81 40.5715H1.03595Z" fill="white" stroke="black"/>
                    <path id="roof2"  d="M49.6453 40.8164L84.2627 0.764626L118.88 40.8164H49.6453Z" fill="white" stroke="black"/>
                    </svg>
                    <WallLayout>
                    <svg width="169" height="235" viewBox="0 0 169 235" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect id="body" x="0.5" y="0.5" width="167.851" height="233.045" fill="white" stroke="black"/>
                    </svg>
                    </WallLayout>
                </RoofLayout>
                <NoRoofWall src={NoRoofwall} />
            </ColorHotelLayout>
        <PalleteLayout>
        <TextStyle>지붕</TextStyle>
            <PalleteFlex>
                <CircleButton name="#AF2010" onClick={changeRoof} style={{background: '#AF2010'}}></CircleButton>
                <CircleButton name="#FF9494" onClick={changeRoof} style={{background: '#FF9494'}}></CircleButton>
                <CircleButton name="#FFD372" onClick={changeRoof} style={{background: '#FFD372'}}></CircleButton>
                <CircleButton name="#829460" onClick={changeRoof} style={{background: '#829460'}}></CircleButton>
                <CircleButton name="#0E5E6F" onClick={changeRoof} style={{background: '#0E5E6F'}}></CircleButton>
                <CircleButton name="#005452" onClick={changeRoof} style={{background: '#005452'}}></CircleButton>
                <CircleButton name="#B4CDE6" onClick={changeRoof} style={{background: '#B4CDE6'}}></CircleButton>
                <CircleButton name="#30475E" onClick={changeRoof} style={{background: '#30475E'}}></CircleButton>
                <CircleButton name="#A4688F" onClick={changeRoof} style={{background: '#A4688F'}}></CircleButton>
                <CircleButton name="#4C243C" onClick={changeRoof} style={{background: '#4C243C'}}></CircleButton>
            </PalleteFlex>
            <br/>
            <br/>
        <TextStyle>호텔</TextStyle>
            <PalleteFlex>
                <CircleButton name="#AF2010" onClick={changeBody} style={{background: '#AF2010'}}></CircleButton>
                <CircleButton name="#FF9494" onClick={changeBody} style={{background: '#FF9494'}}></CircleButton>
                <CircleButton name="#FFD372" onClick={changeBody} style={{background: '#FFD372'}}></CircleButton>
                <CircleButton name="#829460" onClick={changeBody} style={{background: '#829460'}}></CircleButton>
                <CircleButton name="#0E5E6F" onClick={changeBody} style={{background: '#0E5E6F'}}></CircleButton>
                <CircleButton name="#005452" onClick={changeBody} style={{background: '#005452'}}></CircleButton>
                <CircleButton name="#B4CDE6" onClick={changeBody} style={{background: '#B4CDE6'}}></CircleButton>
                <CircleButton name="#30475E" onClick={changeBody} style={{background: '#30475E'}}></CircleButton>
                <CircleButton name="#A4688F" onClick={changeBody} style={{background: '#A4688F'}}></CircleButton>
                <CircleButton name="#4C243C" onClick={changeBody} style={{background: '#4C243C'}}></CircleButton>
            </PalleteFlex>
        </PalleteLayout>
        <br/>
        <br/>
        <br/>
        <Link to="./Nickname">
            <RedButton>다음으로</RedButton>
        </Link>
    </Container>
    </>
  )
}

export default HotelColor

const Container = styled.div`
    margin: 0 auto;
    align-items: center;
    text-align: center;
`
const NicknameInput = styled.form`
    display: flex;
    flex-direction: row;
    justify-items: center;
    justify-content: center;
    align-items: center;

    margin-top: 92.84px;
    margin-bottom: 63px;
`
const InputStylenick = styled.input`
    width: 115px;
    height: 35px;
    background-color: #FCF4E9;
    color:  #000000;

    border-color: transparent;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #BAB8B5;
    padding-left: 10px;
    text-align: center;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;

    ::placeholder {
        color: #BAB8B5;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 33px;
        text-align: center; 
    }

    :focus {
        outline: none;
    }
`
const HotelSubCon = styled.div`
    margin: 0 auto;
`
const HotelImg = styled.img`
    width: 210px;
    height: 315.16px;
    margin-top: 27px;
`
const RoofLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;

    top: 5px;
`

const NoRoofWall = styled.img`
    width: 330px;
    height: 318.16px;

    position: absolute;

`

const WallLayout = styled.div` 
    margin: -15px;
`
const ColorHotelLayout = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 27px;
`
const PalleteLayout = styled.div`
    margin-top: 100px;
`
const TextStyle = styled.div`
    font-size: 18px;
    font-weight: 600px;
    padding-bottom: 5px;
`
const PalleteFlex = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3px;
`
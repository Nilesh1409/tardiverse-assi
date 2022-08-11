import "./input.css";
// import DateSelector from "../dateSelect/dateRange";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Select, Input, Toast } from '@chakra-ui/react'

import { Link } from "react-router-dom";
// import { InputBox } from "../../components/inputBox";
import OfferBar from "../../components/offer/offerSideBar";
import { useToast } from '@chakra-ui/react'


const Home = () => {

  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  //  const [departureDate,setDepartureDate] = useState('');
  const [price, setPrice] = useState();
  const [date, setDate] = useState('yyyy-MM-ddThh:mm');
  const curDate = new Date();
  const [guests, setGuests] = useState(1);
  const [departureDate, setDepartureDate] = useState();
  const toast = useToast();

  const cityArr = ['Mumbai', 'Delhi', 'Chennai', 'Bangaluru', 'Pune']



  const handleCity = (e) => {

    e.target.id === 'fromCity' ? setFromCity(e.target.value) : setToCity(e.target.value);

  }

  const handleOffer = (value) => {

    setPrice(
      (price - (price * value) / 100) * guests
    )

  }
  const getDateArray = (date) => {
    let newDate = date.split('-');
    let tmpDate = newDate[2].split('T');
    let time = tmpDate[1].split(':');

    let year = newDate[0];
    let month = newDate[1];
    let day = tmpDate[0];
    let hours = time[0];
    let minutes = time[1];
    return { year, month, day, hours, minutes };
  }

  const handleDate = (e) => {
    fromCity === toCity ? toast({
      title: `Please select different cities`,
      status: 'error',
      position: 'top',
      isClosable: true,
    })
     
    :
      
      getDateArray(e.target.value).day >= curDate.getDate() && (getDateArray(e.target.value).month >= curDate.getMonth() && getDateArray(e.target.value).year >= curDate.getFullYear()) ? setDate(e.target.value) : toast({
        title: `Please select a valid date`,
        status: 'error',
        position: 'top',
        isClosable: true,
      });

    let differance = getDateArray(e.target.value).month === getDateArray(e.target.value).year ? getDateArray(e.target.value).month - curDate.getMonth() : getDateArray(e.target.value).month - curDate.getMonth() + 12;

    setPrice(price - (price * differance) / 100);

    console.log('diff', differance)

    let newDate = getDateArray(e.target.value)
    console.log(newDate)

    getDateArray(e.target.value).day >= curDate.getDate() && getDateArray(e.target.value).month >= curDate.getMonth() && getDateArray(e.target.value).year >= curDate.getFullYear() ?
     

      setDepartureDate(`${newDate.year}-${newDate.month}-${newDate.day}T${newDate.hours}:${newDate.minutes}`)
      : setDepartureDate('');
    // setDepartureDate('2022-08-19T00:49')


  }

  const handleBooking = () => {
    let auth = JSON.parse(localStorage.getItem('auth'));
    auth ?
      toast({
        title: `Booking successful`,
        status: 'success',
        position: 'top',
        isClosable: true,
      })
      
      : toast({
        title: `Please login to book`,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
   
      setFromCity('')
      setToCity('')
    
      
      
    }

  useEffect(() => {

    fromCity === toCity ? setToCity('') : setToCity(toCity);
    fromCity === toCity ? setPrice(0) : setPrice(price);
    console.log(price, guests)

    let toCityIndex = 0;
    let fromCityIndex = 0;
    for (let i = 0; i < cityArr.length; i++) {
      if (cityArr[i] === toCity) {
        toCityIndex = i;
      }
      if (cityArr[i] === fromCity) {
        fromCityIndex = i;
      }
    }
    console.log(toCityIndex, fromCityIndex, toCity, fromCity)
    fromCity !== '' && toCity !== '' ? setPrice(((toCityIndex + 1 + fromCityIndex + 1) * 999) * guests) : setPrice(0);
    
  }, [fromCity, toCity, guests])


  return (<div className="home-page">

    <OfferBar handleOffer={handleOffer} />
    <div style={{ width: "80%", margin: "auto" }}>

      <div className="main-search">

        <div className="div1">
          <ion-icon name="location-outline">
            <svg data-id="SVG_LOCATION__24" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" d="M6.453 13.47a6.75 6.75 0 01.723-8.692l.05-.05a6.752 6.752 0 019.548 0l.05.05a6.75 6.75 0 01.723 8.693L12 21.25l-5.547-7.78z" clipRule="evenodd"></path><path stroke="currentColor" d="M14.237 9.552a2.238 2.238 0 11-4.475-.001 2.238 2.238 0 014.475.001z" clipRule="evenodd"></path></svg>
          </ion-icon>
          <Select className="select" border='0px' id='fromCity' placeholder='FROM' onChange={(e) => {
            handleCity(e)
          }} >
            {

              cityArr.map((city, index) => {
                return <option key={index + 1} value={city}>{city}</option>
              })
            }
          </Select>

        </div>
        <div className="div1">
          <ion-icon name="location-outline">
            <svg data-id="SVG_LOCATION__24" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" d="M6.453 13.47a6.75 6.75 0 01.723-8.692l.05-.05a6.752 6.752 0 019.548 0l.05.05a6.75 6.75 0 01.723 8.693L12 21.25l-5.547-7.78z" clipRule="evenodd"></path><path stroke="currentColor" d="M14.237 9.552a2.238 2.238 0 11-4.475-.001 2.238 2.238 0 014.475.001z" clipRule="evenodd"></path></svg>
          </ion-icon>
          <Select className="select" style={{ outline: "none", border: "none" }} border='0px' id='ToCity' placeholder='TO' onChange={(e) => {
            handleCity(e)
          }}>

            {
              cityArr.map((city, index) => {
                return <option key={index + 1} value={city}>{city}</option>
              })
            }
          </Select>

        </div>

        <div className="div2">
          <div className="check">
            <span>
              <svg data-id="SVG_CHECK_IN__24" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" stroke="none" fillRule="evenodd" d="M15.618 18.112h2.5v-2.5h-2.5v2.5zM11.068 18.112h2.5v-2.5h-2.5v2.5zM6.618 18.112h2.5v-2.5h-2.5v2.5z" clipRule="evenodd"></path><path stroke="currentColor" d="M3.618 12.956h4.345V8.612M3.569 8.648l4.185 4.22"></path><path stroke="currentColor" d="M3.618 15.394v3.719a1.5 1.5 0 001.5 1.5h15.313V6.112a1.5 1.5 0 00-1.5-1.5H3.618"></path><path fill="currentColor" stroke="none" fillRule="evenodd" d="M15.618 13.112h2.5v-2.5h-2.5v2.5zM11.068 13.112h2.5v-2.5h-2.5v2.5z" clipRule="evenodd"></path><path stroke="currentColor" d="M7.618 2.612V4.61M16.618 2.612V4.61M20.248 8.612h-9.63"></path></svg>
            </span>
            <Input style={{ padding: '0px' }}
              placeholder="Select Date and Time"
              size="lg"
              type="datetime-local"
              value={date}
              onChange={(e) => handleDate(e)}
            />
          </div>

        </div>
        <div className="div2">
          <div className="check">
            <span>
              <svg data-id="SVG_CHECK_IN__24" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" stroke="none" fillRule="evenodd" d="M15.618 18.112h2.5v-2.5h-2.5v2.5zM11.068 18.112h2.5v-2.5h-2.5v2.5zM6.618 18.112h2.5v-2.5h-2.5v2.5z" clipRule="evenodd"></path><path stroke="currentColor" d="M3.618 12.956h4.345V8.612M3.569 8.648l4.185 4.22"></path><path stroke="currentColor" d="M3.618 15.394v3.719a1.5 1.5 0 001.5 1.5h15.313V6.112a1.5 1.5 0 00-1.5-1.5H3.618"></path><path fill="currentColor" stroke="none" fillRule="evenodd" d="M15.618 13.112h2.5v-2.5h-2.5v2.5zM11.068 13.112h2.5v-2.5h-2.5v2.5z" clipRule="evenodd"></path><path stroke="currentColor" d="M7.618 2.612V4.61M16.618 2.612V4.61M20.248 8.612h-9.63"></path></svg>
            </span>
            <Input style={{ padding: '0px' }}
              placeholder="Select Date and Time"
              size="lg"
              type="datetime-local"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </div>

        </div>

        <div className="div3">
          <ion-icon name="people-outline">

          </ion-icon>
          <input
            max="25"
            min="0"
            type="number"
            placeholder="Guests"
            name="guest"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            // onChange={(e) => setGuest(e.target.value)}
            required={true}
          />
        </div>

        <div id="button-search">
          <ion-icon name="search-outline"></ion-icon>
          <button onClick={
            handleBooking
          }>Book</button>

        </div>
      </div >
      <div className='price' >

      Price : <span> {price}</span>
      </div>

    </div>
  </div>)
}

export default Home;
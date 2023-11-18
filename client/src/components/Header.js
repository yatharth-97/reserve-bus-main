import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import image from '../assets/image.jpg';
import bus from '../assets/bus.jpg';
import people from '../assets/people.jpg';
import busBook from '../assets/bus-book.jpg';

const HeaderCont = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  object-fit: cover;
  overflow: hidden;
`;

const BusImage = styled.image`
  width: 100%;
  height: 100%;
  opacity: 0.85;
  object-fit: cover;
  background-image: url(${image});
`;

const TravelEntry = styled.div`
  position: absolute;
  top: 40%;
  left: 18%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  height: 80px;
  width: 800px;
  background-color: rgb(244, 238, 238);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const From = styled.div`
  height: 80px;
  width: 266px;
  border: 1.5px solid gainsboro;
`;

const FromSm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px 0px 12px;
  font-family: Arial, Helvetica, sans-serif;
  color: gray;
`;

const FromToCity = styled.p`
  color: black;
  padding-left: 12px;
  font-weight: 600;
  font-size: medium;
  line-height: 14px;
`;

const Country = styled.span`
  color: black;
  padding-left: 12px;
  font-weight: 600;
  font-size: medium;
  line-height: 14px;
`;

const To = styled.div`
  height: 80px;
  width: 266px;
  border: 1px solid gainsboro;
`;

const TravelDate = styled.div`
  height: 80px;
  width: 266px;
  border: 1px solid gainsboro;
`;

const Search = styled.button`
  position: absolute;
  top: 62%;
  right: 45%;
  border: none;
  background-color: orange;
  color: white;
  border-radius: 6px;
  width: 140px;
  height: 40px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: rgba(0, 0, 0, 0.6) 3px 4px 6px;
`;

const Reviews = styled.div`
  padding: 20px 0px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`;

const Preview = styled.div`
  padding: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  height: auto;
`;

const PreviewCont = styled.div`
  width: 350px;
  height: 250px;
  overflow: hidden;
  flex-wrap: wrap;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.3) 2px 3px 8px;
  position: relative;
`;

const Image = styled.div`
  width: 100%;
  height: 170px;
  overflow: hidden;
  object-fit: cover;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  text-align: center;
  line-height: 8px;
  margin-top: 20px;
`;

const CustomerRating = styled.div`
  background-color: rgb(245, 239, 239);
  padding: 30px 50px;
  margin-bottom: 40px;
`;

const CustomerRatingCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const CustomerCard = styled.div`
  background-color: white;
  width: 220px;
  height: auto;
  overflow-wrap: break-word;
  border-radius: 6px;
  padding: 14px 24px 14px 14px;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: rgba(0, 0, 0, 0.3) 1px 2px 6px;
`;

const CustomerDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const CustomerMark = styled.div`
  background-color: rgb(141, 226, 239);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CustomerName = styled.p`
  font-size: medium;
  color: black;
  font-weight: bold;
`;

const CustomerNameSp = styled.span`
  color: gray;
  font-size: small;
`;

const Ratings = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  color: white;
  gap: 1px;
  width: 44px;
  height: 20px;
  border-radius: 4px;
  margin: 8px 0px;
`;

const RatingDescription = styled.div`
  color: gray;
`;

export const Header = () => {
  return (
    <div>
      <HeaderCont>
        <BusImage />

        <TravelEntry>
          <From>
            <FromSm>
              <small>From</small>
              <i class='fa fa-angle-down' aria-hidden='true'></i>
            </FromSm>
            <FromToCity>Delhi, New Delhi,</FromToCity>
            <Country>India</Country>
          </From>
          <To>
            <FromSm>
              <small>To</small>
              <i class='fa fa-angle-down' aria-hidden='true'></i>
            </FromSm>
            <FromToCity>Delhi, New Delhi,</FromToCity>
            <Country>India</Country>
          </To>
          <TravelDate>
            <FromSm>
              <small>Travel Date</small>
              <i class='fa fa-calendar' aria-hidden='true'></i>
            </FromSm>
            <FromToCity>12 Nov 2022</FromToCity>
          </TravelDate>
        </TravelEntry>
        <Link to='/bus-list'>
          <Search>Search</Search>
        </Link>
      </HeaderCont>
      <Reviews>
        <h2>Reserve ticket with world largest bus booking platform</h2>
        <div>
          <Preview>
            <PreviewCont>
              <Image>
                <img src={bus} alt='' />
              </Image>
              <Card>
                <p>2000 +</p>
                <small>Bus Collection</small>
              </Card>
            </PreviewCont>
            <PreviewCont>
              <Image>
                <img src={people} alt='' />
              </Image>
              <Card>
                <p>2 Millions</p>
                <small>Happy Customers Globally</small>
              </Card>
            </PreviewCont>
            <PreviewCont>
              <Image>
                <img src={busBook} alt='' />
              </Image>
              <Card>
                <p>5000 +</p>
                <small>Tickets Book Everyday</small>
              </Card>
            </PreviewCont>
          </Preview>
        </div>
        <h2>
          Here's what a few of our customers <br /> have to say about us
        </h2>
      </Reviews>
      <CustomerRating>
        <CustomerRatingCont>
          <CustomerCard>
            <CustomerDetails>
              <CustomerMark>
                <span>V</span>
              </CustomerMark>
              <div>
                <CustomerName>Vatsal Agrawal</CustomerName>
                <CustomerNameSp>customer since 2018</CustomerNameSp>
              </div>
            </CustomerDetails>
            <Ratings>
              <i class='fa fa-star' aria-hidden='true'></i>
              <small>4.5</small>
            </Ratings>
            <RatingDescription>
              <small>
                Awesome travel experiece with <br /> reserve. Excellent staff.
              </small>
            </RatingDescription>
          </CustomerCard>
          <CustomerCard>
            <CustomerDetails>
              <CustomerMark>
                <span>V</span>
              </CustomerMark>
              <div>
                <CustomerName>Vanya Agrawal</CustomerName>
                <CustomerNameSp>customer since 2018</CustomerNameSp>
              </div>
            </CustomerDetails>
            <Ratings>
              <i class='fa fa-star' aria-hidden='true'></i>
              <small>4.5</small>
            </Ratings>
            <RatingDescription>
              <small>
                Bus was clean and the journey was <br /> smooth. Reached on
                time.
              </small>
            </RatingDescription>
          </CustomerCard>

          <CustomerCard>
            <CustomerDetails>
              <CustomerMark>
                <span>S</span>
              </CustomerMark>
              <div>
                <CustomerName>Seema Agrawal</CustomerName>
                <CustomerNameSp>customer since 2018</CustomerNameSp>
              </div>
            </CustomerDetails>
            <Ratings>
              <i class='fa fa-star' aria-hidden='true'></i>
              <small>4.5</small>
            </Ratings>
            <RatingDescription>
              <small>
                Bus was clean and the journey was <br /> smooth. Reached on
                time.
              </small>
            </RatingDescription>
          </CustomerCard>
        </CustomerRatingCont>
      </CustomerRating>
    </div>
  );
};

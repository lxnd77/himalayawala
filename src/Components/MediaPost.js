import { PrismicRichText, usePrismicDocumentByUID } from "@prismicio/react";
import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import "./MediaPost.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MediaPost(props) {
  const uid = useParams();
  const [post] = usePrismicDocumentByUID("media_post", uid.uid);

  return (
    <Container className="MediaPost">
      {post ? (
        <div>
          <Row>
            <img
              alt={post.data.preview_image.alt}
              src={post.data.preview_image.url}
              className="preview_image"
            ></img>
          </Row>
          <br />
          <Row className="title">
            <PrismicRichText field={post.data.title} />
          </Row>
          <Row>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={2}
              navigation
              pagination={{ clickable: true }}
              loop={true}
            >
              {post.data.body[0].items.map((item, i) => (
                <SwiperSlide key={i}>
                  <img
                    className="SwiperImg"
                    src={item.image.url}
                    alt={item.image.alt}
                  ></img>
                </SwiperSlide>
              ))}
            </Swiper>
          </Row>
        </div>
      ) : (
        <div>Loading..</div>
      )}
    </Container>
  );
}

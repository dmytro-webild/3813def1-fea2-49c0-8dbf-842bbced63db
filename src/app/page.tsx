"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Clock, MapPin, Phone } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="mediumLarge"
        background="fluid"
        cardStyle="layered-gradient"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "หน้าหลัก",          id: "#hero"},
        {
          name: "เรื่องราว",          id: "#about"},
        {
          name: "เมนู",          id: "#menu"},
        {
          name: "ติดต่อ",          id: "#info"},
      ]}
      brandName="ก๋วยเตี๋ยวไก่ตุ๋นรสเด็ด"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "plain"}}
      title="ก๋วยเตี๋ยวไก่ตุ๋นรสเด็ด"
      description="ก๋วยเตี๋ยวไก่ตุ๋น รสชาติเข้มข้น กลมกล่อม ริมทาง ดำเนินสะดวก"
      tag="Thai Street Food"
      buttons={[
        {
          text: "ดูเมนู",          href: "#menu"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/blurred-photo-supermarket-your-advertising_185193-110539.jpg",          imageAlt: "Blurred image of a vibrant Thai street food noodle stall at golden hour"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/ingredients-used-salad-include-tomatoes-peppers-lime-bitter-gourd_1150-25757.jpg",          imageAlt: "Close-up of a chef preparing authentic Thai braised chicken noodles"}
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="รสชาติระดับตำนาน"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "image",          src: "http://img.b2bpic.net/free-vector/hand-drawn-poke-illustration_23-2149255878.jpg",          alt: "Food truck icon"},
        {
          type: "text",          content: "เรื่องราวของรสชาติเข้มข้นริมทาง"},
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "น้ำซุปเข้มข้น",          description: "เคี่ยวจากกระดูกไก่อย่างพิถีพิถันนานกว่า 8 ชั่วโมง เพื่อให้ได้น้ำซุปที่หอมหวานกลมกล่อม",          imageSrc: "http://img.b2bpic.net/free-photo/meat-tomato-sauce-with-herbs_141793-691.jpg",          imageAlt: "Rich dark broth simmering in a pot",          titleImageSrc: "http://img.b2bpic.net/free-photo/green-curry-made-with-chicken-chili-basil-with-tomato-lime-kaffir-lime-leaves-garlic_1150-25740.jpg",          buttonText: "อ่านเพิ่ม"},
        {
          title: "วัตถุดิบสดใหม่",          description: "คัดสรรไก่และผักสดจากแหล่งคุณภาพดีที่สุด เพื่อรสชาติที่ยอดเยี่ยมในทุกคำ",          imageSrc: "http://img.b2bpic.net/free-photo/closeup-dried-spices-tea-backgroundin-grand-bazaar_181624-61326.jpg",          imageAlt: "Fresh Thai herbs and spices",          titleImageSrc: "http://img.b2bpic.net/free-photo/bundles-chili-pepper-garlic_1398-2246.jpg",          buttonText: "อ่านเพิ่ม"},
        {
          title: "สูตรโบราณ",          description: "สืบทอดจากรุ่นสู่รุ่น รักษาเอกลักษณ์และรสชาติแบบไทยแท้ไม่เปลี่ยนแปลง",          imageSrc: "http://img.b2bpic.net/free-photo/men-women-who-tease-each-other-while-cooking-kitchen-with-red-brick-wall_1150-19046.jpg",          imageAlt: "Old Thai recipe book",          titleImageSrc: "http://img.b2bpic.net/free-photo/top-view-tasty-mushroom-soup-with-different-seasonings-dark-background-soup-mushroom-seasoning-food_140725-80743.jpg",          buttonText: "อ่านเพิ่ม"},
      ]}
      title="ความลับของความอร่อย"
      description="เราใส่ใจในทุกรายละเอียดเพื่อส่งมอบก๋วยเตี๋ยวไก่ตุ๋นรสเด็ดที่ไม่มีใครเหมือน"
      tag="คุณภาพเหนือราคา"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "1",          name: "ไก่ฉีก",          price: "35 บ.",          imageSrc: "http://img.b2bpic.net/free-photo/person-using-chopsticks-eating-noodles-blurred-background_181624-5523.jpg",          imageAlt: "Braised shredded chicken noodle bowl"},
        {
          id: "2",          name: "ตีนไก่",          price: "35 บ.",          imageSrc: "http://img.b2bpic.net/free-photo/stewed-chicken-feet-soup-served-with-spicy-fish-sauce_1150-27362.jpg",          imageAlt: "Braised chicken feet noodle soup"},
        {
          id: "3",          name: "น่องไก่",          price: "40 บ.",          imageSrc: "http://img.b2bpic.net/free-photo/thai-food-noodles-with-pork-meatball-vegetable_1150-27946.jpg",          imageAlt: "Braised chicken drumstick noodle soup"},
        {
          id: "4",          name: "ไก่ฉีก + ตีนไก่",          price: "40 บ.",          imageSrc: "http://img.b2bpic.net/free-photo/pad-thai_1203-2987.jpg",          imageAlt: "Braised shredded chicken and chicken feet noodle"},
        {
          id: "5",          name: "น่องไก่ + ไก่ฉีก",          price: "50 บ.",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-stir-fried-noodles-with-grilled-shrimps-sauce-spring-onion-bell-pepper_141793-5118.jpg",          imageAlt: "Braised chicken drumstick and shredded chicken noodle"},
        {
          id: "6",          name: "น่องไก่ + ตีนไก่",          price: "50 บ.",          imageSrc: "http://img.b2bpic.net/free-photo/delicious-thai-food-still-life_23-2149508960.jpg",          imageAlt: "Braised chicken drumstick and chicken feet noodle"},
        {
          id: "7",          name: "ไก่ฉีก + ตีนไก่ + น่องไก่ (รวมทุกอย่าง)",          price: "50 บ.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-bean-soup-with-grilled-onion-noodles-sour-cream-beans_141793-3802.jpg",          imageAlt: "All-inclusive braised chicken noodle with shredded chicken, chicken feet, and drumstick"},
        {
          id: "8",          name: "เอกเหนง (พิเศษ)",          price: "60 บ.",          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-eating-disorder-trying-eat-healthy_23-2149229152.jpg",          imageAlt: "Special braised chicken noodle dish"},
      ]}
      title="เมนูโปรดของคุณ"
      description="สัมผัสรสชาติอันเป็นเอกลักษณ์ของก๋วยเตี๋ยวไก่ตุ๋นสูตรเด็ดของเรา"
      tag="รายการอาหาร"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "สุภาพร",          imageSrc: "http://img.b2bpic.net/free-photo/group-middle-age-friends-having-fun-night_23-2149237486.jpg",          imageAlt: "Customer review by Supaporn",          quote: "ก๋วยเตี๋ยวไก่ร้านนี้อร่อยมาก น้ำซุปเข้มข้น ไก่นุ่มละลายในปาก กินกี่ครั้งก็ไม่เคยเบื่อเลยค่ะ!"},
        {
          id: "2",          name: "ธนากร",          imageSrc: "http://img.b2bpic.net/free-photo/blond-man-happy-expression_1194-1905.jpg",          imageAlt: "Customer review by Tanakorn",          quote: "เป็นร้านที่ต้องแวะทุกครั้งที่ผ่านมาดำเนินสะดวก รสชาติแบบต้นตำรับ หาที่ไหนไม่ได้อีกแล้วครับ"},
        {
          id: "3",          name: "อารยา",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-old-man-portrait_23-2151056562.jpg",          imageAlt: "Customer review by Araya",          quote: "ประทับใจตั้งแต่ครั้งแรกที่ได้ลอง วัตถุดิบคุณภาพดีมากค่ะ คุ้มค่าเกินราคาจริงๆ"},
        {
          id: "4",          name: "วิโรจน์",          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-cafe-dines-traditional-shakshuka-ayran_169016-16512.jpg",          imageAlt: "Customer review by Viroj",          quote: "น้ำซุปหอมเครื่องเทศมากครับ ไก่ตุ๋นจนเปื่อยนุ่ม กำลังดีเลยครับ อยากให้มาลองกันเยอะๆ"},
        {
          id: "5",          name: "ปรีชา",          imageSrc: "http://img.b2bpic.net/free-photo/two-women-eating-pasta-italian-restaurant_1303-24377.jpg",          imageAlt: "Customer review by Preecha",          quote: "สุดยอดก๋วยเตี๋ยวไก่ตุ๋นเลยครับ! รสชาติกลมกล่อม ไม่ต้องปรุงเพิ่มก็อร่อยแล้ว"},
      ]}
      cardTitle="เสียงจากลูกค้าของเรา"
      cardTag="ความประทับใจ"
      cardAnimation="blur-reveal"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",          title: "ก๋วยเตี๋ยวมีรสชาติเผ็ดไหม?",          content: "ก๋วยเตี๋ยวไก่ตุ๋นรสเด็ดของเรามีรสชาติกลมกล่อม ไม่เผ็ดมาก เด็กๆ ทานได้ หากต้องการความเผ็ด สามารถเพิ่มพริกป่นเองได้ค่ะ"},
        {
          id: "2",          title: "มีเมนูสำหรับคนไม่ทานเนื้อสัตว์หรือไม่?",          content: "ขออภัยค่ะ ปัจจุบันเรายังไม่มีเมนูก๋วยเตี๋ยวสำหรับคนไม่ทานเนื้อสัตว์ แต่เรากำลังพิจารณาในอนาคตค่ะ"},
        {
          id: "3",          title: "รับสั่งกลับบ้านหรือจัดส่งไหม?",          content: "เรามีบริการสั่งกลับบ้านค่ะ ส่วนบริการจัดส่ง ปัจจุบันยังไม่มีบริการจัดส่งในพื้นที่ค่ะ"},
      ]}
      title="คำถามที่พบบ่อย"
      description="เราได้รวบรวมคำถามที่ลูกค้ามักจะถามบ่อยๆ มาไว้ที่นี่"
      tag="ช่วยเหลือ"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="info" data-section="info">
      <MetricCardOne
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      animationType="slide-up"
      metrics={[
        {
          id: "address",          value: "📍 แพงพวย",          title: "ตำบลแพงพวย อำเภอดำเนินสะดวก ราชบุรี 70130",          description: "หาเราเจอได้ง่ายๆ บนแผนที่!",          icon: MapPin,
        },
        {
          id: "phone",          value: "📞 098 820 2790",          title: "โทรสอบถาม",          description: "ติดต่อเราได้เลย!",          icon: Phone,
        },
        {
          id: "hours",          value: "🕙 เปิด 10:00 – 16:00 น.",          title: "ทุกวัน (หยุดทุกวันอังคาร)",          description: "มาลิ้มลองความอร่อยได้เลย!",          icon: Clock,
        },
      ]}
      title="เยี่ยมชมร้านของเรา"
      description="ค้นพบทำเลที่ตั้งและเวลาทำการของเราด้านล่าง"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "หน้าหลัก",              href: "#hero"},
            {
              label: "เมนู",              href: "#menu"},
            {
              label: "เกี่ยวกับเรา",              href: "#about"},
          ],
        },
        {
          items: [
            {
              label: "คำถามที่พบบ่อย",              href: "#faq"},
            {
              label: "ติดต่อเรา",              href: "#info"},
          ],
        },
      ]}
      logoText="ก๋วยเตี๋ยวไก่ตุ๋นรสเด็ด"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

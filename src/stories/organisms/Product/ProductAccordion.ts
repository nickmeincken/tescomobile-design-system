import { html } from 'lit';
import { AccordionItem } from '../../molecules/AccordionItem/AccordionItem';

export const ProductAccordion = () => html`
<div class="product attribute content_bottom">
  <h2>Apple iPhone 17 Pro Max FAQs:</h2>
  <div class="cmp accordion">
    ${AccordionItem({
      heading: 'When did the iPhone 17 Pro Max launch?',
      content: 'The iPhone 17 Pro Max was available for pre-order from 12th September 2025, and was available to buy on 19th September 2025.',
      name: 'faq'
    })}
    ${AccordionItem({
      heading: 'How much does an iPhone 17 Pro Max cost in the UK?',
      content: 'The iPhone 17 Pro Max will vary in price depending on the memory size and retailer. For the latest price on Tesco Mobile scroll to the top of this page.',
      name: 'faq'
    })}
    ${AccordionItem({
      heading: 'Which colours does the iPhone 17 Pro Max come in?',
      content: 'The iPhone 17 Pro Max is available in three colors; Cosmic Orange, Deep Blue and Silver.',
      name: 'faq'
    })}
    ${AccordionItem({
      heading: 'What is included in the box with the iPhone 17 Pro Max?',
      content: 'iPhone 17 Pro Max smartphone, USB-C to USB-C charging cable, a quick start guide and a SIM card ejection tool. As part of Apple’s efforts to reach carbon neutrality by 2030 the iPhone 17 Pro Max will not come with a power adapter or EarPods. Apple encourages you to use any compatible USB‑C power adapter. If you need a new Apple power adapter or headphones, please purchase these accessories separately.',
      name: 'faq'
    })}
    ${AccordionItem({
      heading: 'What’s the camera quality of the iPhone 17 Pro Max?',
      content: 'The iPhone 17 Pro Max features a cutting-edge 48MP Pro Fusion camera system with Main, Ultra Wide, and Telephoto lenses, delivering super-high-resolution photos (24MP and 48MP), next-generation portraits with Focus and Depth Control, and macro photography. It also supports Dolby Vision video recording up to 4K at 120 fps, making it ideal for professional-grade content creation. The front camera is an upgraded 18MP Center Stage lens, perfect for group selfies and ultra-stabilised video calls.',
      name: 'faq'
    })}
    ${AccordionItem({
      heading: 'What is the iPhone 17 Pro Max’s screen size?',
      content: 'The iPhone 17 Pro Max features a 6.9-inch Super Retina XDR display, offering immersive visuals with ProMotion technology, Always-On display, and Dynamic Island for a fluid and responsive user experience.',
      name: 'faq'
    })}
    ${AccordionItem({
      heading: 'What is the battery life of the iPhone 17 Pro Max like?',
      content: 'The iPhone 17 Pro Max offers exceptional battery performance, with up to 37 hours of video playback, the longest battery life ever on an iPhone. This marks a significant improvement over previous models, ensuring all-day usage for streaming, gaming, and productivity without needing a recharge.',
      name: 'faq'
    })}
    ${AccordionItem({
      heading: 'What chip does the iPhone 17 Pro Max have?',
      content: 'The iPhone 17 Pro Max is powered by the A19 Pro chip, featuring a 6-core GPU and advanced vapor cooling technology. This delivers lightning-fast performance and up to 2.5x faster GPU speeds compared to previous models, making it ideal for demanding tasks like gaming, video editing, and multitasking.',
      name: 'faq'
    })}
    ${AccordionItem({
      heading: 'How is the iPhone 17 Pro Max different from the iPhone 16 Pro Max?',
      content: 'The iPhone 17 Pro Max offers several key upgrades over the iPhone 16 Pro Max, including the powerful A19 Pro chip with vapor cooling for up to 2.5x faster GPU performance, a longer battery life of up to 37 hours video playback, and an enhanced 48MP Pro Fusion camera system capable of 4K Dolby Vision recording at 120 fps. It also features a larger 6.9” Super Retina XDR display with ProMotion and Always-On technology, an upgraded 18MP Center Stage front camera for smarter selfies and video calls, and runs on iOS 26 with Apple Intelligence for a more intuitive and personalised experience.',
      name: 'faq'
    })}
    ${AccordionItem({
      heading: 'Is the iPhone 17 Pro Max waterproof?',
      content: 'The iPhone 17 Pro Max includes water and dust resistance, typically rated IP68, which means it can withstand submersion in water up to a certain depth and duration.',
      name: 'faq'
    })}
    ${AccordionItem({
      heading: 'What are the iPhone 17’s specs?',
      content: 'The iPhone 17 features a 6.3-inch LTPO OLED display (120Hz), Apple A19 chip, 8GB RAM, 256GB or 512GB storage, dual 48MP rear cameras, 18MP front camera, 3,692mAh battery with fast and wireless charging, and runs iOS 26. It’s IP68 water-resistant and supports Apple Intelligence AI.',
      name: 'faq'
    })}
    ${AccordionItem({
      heading: 'What version of IOS does the iPhone 17 Pro Max run?',
      content: 'The iPhone 17 runs iOS 26, which includes Apple Intelligence AI features and enhanced privacy tools.',
      name: 'faq'
    })}
    ${AccordionItem({
      heading: 'Does the iPhone 17 Pro Max have AI?',
      content: 'Yes. The iPhone 17 Pro Max includes Apple Intelligence, offering privacy focused AI features like improved Siri, systemwide writing tools, Genmoji, Visual Intelligence, and call/message summaries. ',
      name: 'faq'
    })}
    ${AccordionItem({
      heading: 'What new video features does the iPhone 17 Pro Max support?',
      content: 'The iPhone 17 Pro Max offers 8K video recording, enhanced Cinematic Mode, improved low-light performance, and real-time AI-powered editing tools for smoother transitions and better stabilization.',
      name: 'faq'
    })}
    ${AccordionItem({
      heading: 'How does the iPhone 17 Pro Max compare to the Samsung Galaxy S25 Ultra',
      content: 'The iPhone 17 Pro Max provides excelleng video recording, MagSafe accessory support, and offers up to 2TB storage. The Samsung Galaxy S25 Ultra stands out with a brighter anti-reflective display, more versatile cameras (including 200MP main and 5x zoom), faster 45W charging, and S Pen support. If you are looking for a smartphone that provides great videography and to integrate within the Apple ecosytem, choose the iPhone 17 Pro Max. Buy the Samsung Galaxy S25 Ultra if you prioritise display, photography and advanced aI features.',
      name: 'faq'
    })}
    ${AccordionItem({
      heading: 'What are the key differences between the iPhone 17 Pro Max and the Google Pixel 10 Pro?',
      content: 'The iPhone 17 Pro Max offers longer battery life, a higher resolution display, and privacy-focused Apple Intelligence AI. Google Pixel 10 Pro provides advanced Google Gemini AI tools, better zoom versatility (5x optical), and Android flexibility. If you prioritise performance and the Apple ecosytem, the iPhone 17 Pro Max is a great choice and Apple’s most powerful iPhone yet. The Google Pixel 10 Pro is an excellent choice if you would prefer to benefit from advanceed AI features and camera versatility. ',
      name: 'faq'
    })}
  </div>
</div>
`;

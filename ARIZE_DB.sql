CREATE SCHEMA `arize_db` ;
USE `arize_db`;

CREATE TABLE `arize_db`.`products` (
  `product_id` INT NOT NULL,
  `image` varchar(300),
  `Name` VARCHAR(65) NOT NULL,
  `Description` VARCHAR(2000) NOT NULL,
  `Category` VARCHAR(45) NOT NULL,
  `Price` VARCHAR(45) NOT NULL,
  `Quantity` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`product_id`));
  
INSERT INTO `arize_db`.`products` (`product_id`, `image` ,`Name`, `Description`, `Category`, `Price`, `Quantity`) VALUES ('1','https://github.com/Urswin-Faro/Arive_assets/blob/main/Assets/products/laptops/ASUS%20TUF%20Gaming%20A16%20(2024)%20FA608.png?raw=true', 'ASUS TUF Gaming A16 (2024) FA608', 'The ASUS TUF Gaming A16 (2024) FA608 is a durable, mid-range gaming laptop designed for performance and portability. It features a 16-inch QHD+ or FHD+ display with high refresh rates (165Hz/240Hz), powered by AMD Ryzen 7000 series processors and Radeon RX 7000 series GPUs. It includes 16GB/32GB DDR5 RAM, fast PCIe Gen 4 SSD storage, and advanced cooling for optimal performance. Built to MIL-STD-810H standards, it offers a robust design, customizable RGB keyboard, Wi-Fi 6E, and a range of ports (USB-C, HDMI 2.1, Ethernet). With a large battery, Windows 11, and ASUS software like Armoury Crate, it’s ideal for gamers, creators, and professionals seeking a reliable, high-performance laptop.', 'Laptop', 'R17,000', '10');
INSERT INTO `arize_db`.`products` (`product_id`,  `image`,`Name`, `Description`, `Category`, `Price`, `Quantity`) VALUES ('2','https://github.com/Urswin-Faro/Arive_assets/blob/main/Assets/products/laptops/ASUS%20TUF%20Gaming%20F15%20(2022).png?raw=true', 'ASUS TUF Gaming F15 (2022)', 'The ASUS TUF Gaming F15 (2022) is a powerful gaming laptop designed for durability and performance. It features Intel 12th Gen Core processors, NVIDIA GeForce RTX graphics, and a high-refresh-rate display for smooth gameplay. Built with military-grade toughness, it offers excellent cooling, an RGB-backlit keyboard, and a long-lasting battery. Ideal for gamers and power users, it balances performance and affordability in a rugged chassis.', 'Laptop', 'R18,500', '5');
INSERT INTO `arize_db`.`products` (`product_id`, `image`, `Name`, `Description`, `Category`, `Price`, `Quantity`) VALUES ('3','https://github.com/Urswin-Faro/Arive_assets/blob/main/Assets/products/laptops/ASUS%20Zenbook%20Pro%2016X%20OLED%20(UX7602).png?raw=true', 'ASUS Zenbook Pro 16X OLED (UX7602)', 'The ASUS Zenbook Pro 16X OLED (UX7602) is a premium creator-focused laptop featuring a stunning 16-inch 4K OLED touchscreen with exceptional color accuracy. Powered by high-performance Intel Core i9 processors and NVIDIA GeForce RTX graphics, it’s designed for professionals in content creation, video editing, and design. It includes the ASUS Active Aerodynamic System Ultra (AAS Ultra) for enhanced cooling, a tilting RGB backlit keyboard, and an innovative ASUS Dial for precision control in creative apps. With a sleek aluminum unibody and advanced features, it offers a top-tier experience for creators.', 'Laptop', 'R36,000', '6');
INSERT INTO `arize_db`.`products` (`product_id`, `image`, `Name`, `Description`, `Category`, `Price`, `Quantity`) VALUES ('4','https://github.com/Urswin-Faro/Arive_assets/blob/main/Assets/products/laptops/HP%20EliteBook%20830%2013%20inch%20G11%20Notebook%20PC.png?raw=true', 'HP EliteBook 830 13 inch G11 Notebook PC', 'The HP EliteBook 830 13-inch G11 is a premium business laptop designed for professionals. It features a 13.3-inch WUXGA display, Intel Core Ultra 7 processors, 16GB LPDDR5x RAM, and up to 1TB PCIe Gen4 SSD. With HP Wolf Security and a sleek, lightweight design, it offers strong performance, security, and portability for on-the-go productivity.', 'Laptop', 'R18,405', '2');
INSERT INTO `arize_db`.`products` (`product_id`, `image`, `Name`, `Description`, `Category`, `Price`, `Quantity`) VALUES ('5','https://github.com/Urswin-Faro/Arive_assets/blob/main/Assets/products/laptops/HP%20Pavilion%20Laptop%2016-af0015ni,%20Windows%2011%20Home%20Single%20Language.jpg?raw=true', 'HP Pavilion Laptop 16-af0015ni, Windows 11 Home Single Language', 'The HP Pavilion Laptop 16-af0015ni is a versatile 16-inch notebook designed for both productivity and entertainment. It runs on Windows 11 Home Single Language and is powered by the Intel® Core™ Ultra 7 155U processor, offering speeds up to 4.8 GHz with Intel® Turbo Boost Technology. The laptop comes with 16 GB of LPDDR5x RAM and a 1 TB PCIe® NVMe™ SSD, ensuring smooth multitasking and ample storage. Its 2K (2048 x 1280) OLED display boasts a 120 Hz refresh rate, 1 ms response time, and 100% DCI-P3 color gamut, delivering vibrant visuals. Additional features include Intel® Wi-Fi 6E, Bluetooth® 5.3, a full-size backlit keyboard with numeric keypad, and a variety of ports such as USB Type-C® and HDMI 2.1. The laptop is available in a sleek sky blue color.', 'Laptop', 'R13,000', '15');
INSERT INTO `arize_db`.`products` (`product_id`,  `image`,`Name`, `Description`, `Category`, `Price`, `Quantity`) VALUES ('6','https://github.com/Urswin-Faro/Arive_assets/blob/main/Assets/products/desktops/HP%2023.8%20inch%20All-in-One%2024-cr1002ni%20PC,%20Windows%2011.jpg?raw=true', 'HP 23.8 inch All-in-One 24-cr1002ni PC, Windows 11', 'The HP 23.8 inch All-in-One 24-cr1002ni PC is a sleek and efficient desktop solution designed for both productivity and entertainment. It runs on Windows 11 Home Single Language in S mode and is powered by the Intel® Core™ Ultra 5 125U processor, offering speeds up to 4.3 GHz with Intel® Turbo Boost Technology. The system comes equipped with 16 GB DDR5-5600 RAM and a 512 GB PCIe® NVMe™ M.2 SSD, ensuring smooth multitasking and ample storage. Its 23.8-inch Full HD (1920 x 1080) IPS display features a three-sided micro-edge design and anti-glare coating, delivering vibrant visuals with 99% sRGB color gamut. Additional features include integrated Intel® Graphics, dual 2 W speakers, a variety of ports such as USB Type-C® and HDMI-out 1.4, and a HP True Vision 1080p FHD IR tilt privacy camera with dual array digital microphones. The device is housed in a stylish shell white chassis, making it a modern addition to any workspace.', 'Monitors', 'R10,500', '15');
INSERT INTO `arize_db`.`products` (`product_id`,  `image`, `Name`, `Description`, `Category`, `Price`, `Quantity`) VALUES ('7','https://github.com/Urswin-Faro/Arive_assets/blob/main/Assets/products/desktops/HP%20All-in-One%20Desktop%2022-dg0001ni,%20Windows%2011%20.jpg?raw=true', 'HP All-in-One Desktop 22-dg0001ni, Windows 11', 'The HP All-in-One Desktop 22-dg0001ni is a compact and stylish PC designed for everyday computing needs. It features a 21.5-inch Full HD (1920 x 1080) display with a three-sided micro-edge design, providing clear and vibrant visuals. Powered by an Intel® Core™ i3-N300 processor (up to 3.8 GHz with Intel® Turbo Boost Technology), it ensures reliable performance for daily tasks. The system comes with 8 GB DDR5-4800 MHz RAM and a 512 GB PCIe® NVMe™ M.2 SSD, offering smooth multitasking and ample storage space. Additional features include integrated Intel® UHD Graphics, Realtek Wi-Fi 6 and Bluetooth® 5.3 connectivity, a variety of ports such as USB Type-C® and HDMI-out 1.4, and a HP True Vision 720p HD privacy camera with dual array digital microphones. The device is housed in a sleek cashmere white chassis, making it a modern addition to any workspace.', 'Monitors', 'R8,400', '12');
INSERT INTO `arize_db`.`products` (`product_id`,  `image`,`Name`, `Description`, `Category`, `Price`, `Quantity`) VALUES ('8','https://github.com/Urswin-Faro/Arive_assets/blob/main/Assets/products/desktops/HP%20OmniStudio%20X%20AiO%2027-cs0000ni%20DT%20PC.jpg?raw=true', 'HP OmniStudio X All-in-One 27-cs0000ni Desktop PC','The HP OmniStudio X All-in-One 27-cs0000ni Desktop PC is a high-performance, space-saving solution designed for both professional and personal use. It features a 27-inch Full HD (1920 x 1080) touchscreen display with IPS technology, anti-glare coating, and 99% sRGB color gamut, delivering vibrant and accurate visuals. Powered by the Intel® Core™ Ultra 7 155H processor (up to 4.8 GHz with Intel® Turbo Boost Technology, 24 MB L3 cache, 16 cores, 22 threads) and integrated Intel® Arc™ Graphics, it ensures smooth multitasking and efficient performance. The system comes with 32 GB DDR5-5600 MHz RAM and a 1 TB PCIe® NVMe™ M.2 SSD, providing ample memory and storage for demanding applications. Additional features include a 5MP IR camera with dual array digital microphones, dual 2W speakers, multiple USB Type-A and Type-C® ports, HDMI-in and HDMI-out ports, and Intel® Wi-Fi 7 BE200 (2x2) with Bluetooth® 5.4 support. The device runs on Windows 11 Home Single Language in S mode and is housed in a sleek meteor silver chassis, making it a stylish addition to any workspace.', 'Monitors', 'R22,105', '6');
INSERT INTO `arize_db`.`products` (`product_id`,  `image`,`Name`, `Description`, `Category`, `Price`, `Quantity`) VALUES ('9','https://github.com/Urswin-Faro/Arive_assets/blob/main/Assets/products/desktops/Lenovo%20ThinkCentre%20M70a%20G3%2021.5-inch%20FHD%20Intel%20Core%20i5.png?raw=true', 'Lenovo ThinkCentre M70a G3 21.5-inch FHD Intel Core i5', 'The Lenovo ThinkCentre M70a G3 is a 21.5-inch all-in-one desktop PC designed for business environments. It features a Full HD (1920 x 1080) display, providing clear and vibrant visuals. The system is powered by an Intel Core i5 processor, ensuring efficient performance for everyday tasks. Configurations typically include 8 GB of RAM and a 256 GB SSD, offering a balance between speed and storage capacity. The M70a G3 is equipped with integrated Intel UHD Graphics, suitable for standard business applications. Connectivity options include Wi-Fi and Bluetooth support, along with multiple USB ports for peripheral devices. The all-in-one design reduces clutter, making it ideal for office spaces. The device runs on Windows 11 Pro, providing a secure and user-friendly operating system. For more detailed specifications and purchasing options, you can visit Lenovo\'s official website.', 'Monitors', 'R13,100', '19');
INSERT INTO `arize_db`.`products` (`product_id`,  `image`,`Name`, `Description`, `Category`, `Price`, `Quantity`) VALUES ('10','https://raw.githubusercontent.com/Urswin-Faro/Arive_assets/refs/heads/main/Assets/products/desktops/Lenovo%20ThinkCentre%20Neo%2050a%20G5%2023.8-inch%20FHD%20Intel%20Core%20i7.webp', 'Lenovo ThinkCentre Neo 50a G5 23.8-inch FHD Intel Core i7', 'The Lenovo ThinkCentre Neo 50a G5 is a 23.8-inch all-in-one desktop PC designed for business environments. It features a Full HD (1920 x 1080) display with anti-glare coating, providing clear visuals for daily tasks. The system is powered by an Intel Core i7-13620H processor, ensuring efficient performance for multitasking and demanding applications. Configurations typically include 32 GB of DDR5 RAM and a 1 TB SSD, offering ample memory and fast storage. Additional features include integrated Intel UHD Graphics, Wi-Fi 6 connectivity, multiple USB ports, HDMI input and output, and a 5MP IR camera with dual array digital microphones. The device runs on Windows 11 Pro, providing a secure and user-friendly operating system. For more detailed specifications and purchasing options, you can visit Lenovo\'s official website.', 'Monitors', 'R15,000', '8');
INSERT INTO `arize_db`.`products` (`product_id`,  `image`,`Name`, `Description`, `Category`, `Price`, `Quantity`) VALUES ('11','https://github.com/Urswin-Faro/Arive_assets/blob/main/Assets/products/PC%20towers/011%20Dynamic%20MINI%20snow%20edition.jpg?raw=true', '011 Dynamic MINI snow edition', 'The Lian Li O11 Dynamic MINI Snow Edition is a compact, high-quality PC case designed for enthusiasts seeking a sleek, all-white aesthetic. It features a dual-chamber design with tempered glass panels on the front and side, allowing for clear visibility of internal components. The case supports various motherboard sizes, including mini-ITX, micro-ATX, ATX, and E-ATX, and accommodates up to nine fans for optimal cooling. Its modular back panel design offers flexibility in configuring expansion slots, catering to diverse build requirements. The Snow Edition variant is distinguished by its white powder-coated aluminum exterior, white dust filters, and light grey rubber grommets, providing a clean and modern look.', 'PC Tower', 'R1,800', '12');
INSERT INTO `arize_db`.`products` (`product_id`,  `image`,`Name`, `Description`, `Category`, `Price`, `Quantity`) VALUES ('12','https://github.com/Urswin-Faro/Arive_assets/blob/main/Assets/products/PC%20towers/Apevia%20Predator.jpg?raw=true', 'Apevia Predator', 'The Apevia Predator is a mid-tower gaming case designed to combine functionality with aesthetic appeal. It features a tempered glass side panel, allowing users to showcase their internal components. The case comes equipped with four pre-installed RGB fans—three in the front and one in the rear—each with inner and outer rings that illuminate in 16 different color modes. These lighting effects can be controlled via a minimalist LED button located on the top panel. The top panel also includes two USB 2.0 ports, one USB 3.0 port, and audio jacks for external devices. The Predator supports standard ATX, Micro-ATX, and Mini-ITX motherboards and offers ample space for components, including support for video cards up to 350mm in length and CPU coolers up to 160mm in height. It accommodates up to six 120mm fans and supports water cooling solutions with space for up to 240mm radiators in the top and front, and a 120mm radiator in the rear. The case is available in multiple colors, including black, white, and pink, to suit various aesthetic preferences. ', 'PC Tower', 'R1,300', '4');
INSERT INTO `arize_db`.`products` (`product_id`,  `image`,`Name`, `Description`, `Category`, `Price`, `Quantity`) VALUES ('13','https://github.com/Urswin-Faro/Arive_assets/blob/main/Assets/products/PC%20towers/Gabinete%20The%20Tower%20300%20Matcha%20Green.jpg?raw=true', 'H5 Flow ATX Mid ', 'The NZXT H5 Flow is a compact mid-tower ATX case designed to enhance airflow and cooling performance for gaming and high-performance PC builds. It features a perforated front panel and mesh side panels to maximize air intake and exhaust, promoting efficient cooling. The case supports up to a 360mm radiator in the front and a 240mm radiator at the top, accommodating various liquid cooling setups. It also includes a perforated PSU shroud with side and bottom ventilation, allowing for optimal air intake from two 120mm fans (not included). The H5 Flow comes equipped with two 120mm Quiet Airflow fans (CV)—one in the front and one in the rear—for solid out-of-the-box performance. The ultra-fine mesh on the top, front, and side panels creates maximum airflow and filters dust. The case offers ample space for components, including support for graphics cards up to 410mm in length and CPU coolers up to 165mm in height. It also features cable management options with wide channels, hooks, and straps to keep cables organized and out of sight. The H5 Flow is available in black and white color options.', 'PC Tower', 'R2,000', '17');
INSERT INTO `arize_db`.`products` (`product_id`,  `image`,`Name`, `Description`, `Category`, `Price`, `Quantity`) VALUES ('14','https://github.com/Urswin-Faro/Arive_assets/blob/main/Assets/products/PC%20towers/Godmode%20the%20Titan.jpg?raw=true', 'PC Gamer AMD AM5 Ryzen 5 8500G', 'The AMD Ryzen™ 5 8500G is a desktop processor designed for efficient performance in compact systems. It features 6 cores and 12 threads, operating at a base frequency of 3.5 GHz with the capability to boost up to 5.0 GHz, depending on workload. This processor utilizes AMD\'s Zen 4 architecture and is compatible with the AM5 socket. It also integrates AMD Radeon™ 740M Graphics, providing solid graphics performance for everyday tasks and light gaming. \nAMD\n\nFor gaming enthusiasts, the Ryzen™ 5 8500G offers a balance between performance and power efficiency, making it suitable for mid-range gaming systems. Its 6-core, 12-thread configuration ensures smooth multitasking and responsiveness in various applications.', 'PC Tower', 'R14,000', '9');
INSERT INTO `arize_db`.`products` (`product_id`,  `image`,`Name`, `Description`, `Category`, `Price`, `Quantity`) VALUES ('15','https://github.com/Urswin-Faro/Arive_assets/blob/main/Assets/products/PC%20towers/H5%20Flow%20ATX%20Mid%20.jpg?raw=true', 'Infomax PC Gamer ', 'Infomax Paris specializes in custom-built gaming PCs. They offer high-performance systems with personalized configurations, featuring the latest processors and graphics cards like the AMD Ryzen 7 7800X3D and RX 7900 XTX. Their models, including the PC Gamer RTX 5080, are designed for various gaming needs. For more details and custom options, visit Infomax Paris.', 'PC Tower', 'R13,000', '3');
INSERT INTO `arize_db`.`products` (`product_id`,  `image`,`Name`, `Description`, `Category`, `Price`, `Quantity`) VALUES ('16','https://github.com/Urswin-Faro/Arive_assets/blob/main/Assets/products/accessories/HP%204K%20USB%20Type%20C%C2%AE%20Multiport%20Hub%20-%20Black.jpg?raw=true', 'HP 4K USB Type C® Multiport Hub - Black', 'The HP 4K USB-C Multiport Hub is a compact device designed to expand your laptop\'s connectivity options. It features four USB Type-C ports with speeds up to 10 Gbps:\n\nOne port delivers up to 65W power to charge your laptop.\nTwo ports are for connecting and charging accessories.\nOne port supports connecting a 4K monitor.\nThis hub is compatible with various operating systems, including Windows 10, Windows 11, ChromeOS, Android, macOS, and iPadOS, as long as your devices have a USB Type-C port. Its sustainable, compact, and stylish design includes a unique power cord and easy-to-access USB-C ports. Made from 50% post-consumer recycled plastic, it offers both functionality and environmental responsibility.', 'Accessories', 'R900', '4');
INSERT INTO `arize_db`.`products` (`product_id`,  `image`,`Name`, `Description`, `Category`, `Price`, `Quantity`) VALUES ('17','https://github.com/Urswin-Faro/Arive_assets/blob/main/Assets/products/accessories/HP%20950%204K%20Webcam.jpg?raw=true', 'HP 950 4K Webcam', 'The HP 950 4K Webcam offers high-quality video with 4K UHD at 30 fps and 1080p at 60 fps. It features AI face-framing, auto light correction, and a 103° field of view. The webcam also includes a privacy shutter and is compatible with Windows, macOS, and Chrome OS. It connects via USB Type-A and has a 13 MP CMOS sensor. For more details, visit HP\'s website.', 'Accessories', 'R2,700', '7');
INSERT INTO `arize_db`.`products` (`product_id`,  `image`,`Name`, `Description`, `Category`, `Price`, `Quantity`) VALUES ('18','https://github.com/Urswin-Faro/Arive_assets/blob/main/Assets/products/accessories/HP%20Wireless%20Mouse%20250.jpg?raw=true', 'HP Wireless Mouse 250', 'The HP Wireless Mouse 250 is a compact, ambidextrous mouse designed for everyday use. It features a 2.4 GHz wireless connection for reliable performance and a Blue LED optical sensor for precise tracking on various surfaces. The mouse includes three buttons and a built-in scroll wheel for efficient navigation. Its ergonomic design ensures comfort during extended use. The mouse is powered by a single AA battery, offering long battery life. It is compatible with devices that have a USB port. The mouse measures 9.48 x 5.7 x 3.91 cm and weighs 0.094 kg. It comes with a one-year limited warranty.', 'Accessories', 'R250', '10');
INSERT INTO `arize_db`.`products` (`product_id`,  `image`,`Name`, `Description`, `Category`, `Price`, `Quantity`) VALUES ('19','https://raw.githubusercontent.com/Urswin-Faro/Arive_assets/refs/heads/main/Assets/products/accessories/Lenovo%20Go%20Wired%20Speakerphone%204XD1C82055.webp', 'Lenovo Go Wired Speakerphone 4XD1C82055', 'The Lenovo Go Wired Speakerphone (4XD1C82055) is a compact, plug-and-play device designed to enhance remote conferencing and audio experiences. It features an omni-directional microphone with a 1.5-meter pickup range, ensuring clear communication during calls. The speakerphone supports full-duplex audio, Acoustic Echo Cancellation (AEC), and Automatic Gain Control (AGC) for optimal sound quality. Its intuitive controls include a volume wheel, tactile keys, and readable LEDs. Connectivity is via USB-C, with an integrated cable management system for convenience. The device is certified for Microsoft Teams, ensuring seamless integration with the platform. Its compact dimensions (Ø90 x 49 mm) and lightweight design (265g) make it portable and easy to carry. The package includes a travel pouch for added convenience.', 'Accessories', 'R1,800', '9');
INSERT INTO `arize_db`.`products` (`product_id`,  `image`,`Name`, `Description`, `Category`, `Price`, `Quantity`) VALUES ('20','https://raw.githubusercontent.com/Urswin-Faro/Arive_assets/refs/heads/main/Assets/products/accessories/Lenovo%20Yoga%20ANC%20Wireless%20Bluetooth%20USB%20Type-C%20Headphones%20GXD1A39963.webp', 'Lenovo Yoga ANC Wireless USB Type-C Headphones', 'The Lenovo Yoga ANC Wireless Bluetooth USB Type-C Headphones (GXD1A39963) are designed to deliver high-quality audio with active noise cancellation (ANC) for an immersive listening experience.\n\nKey Features:\n\nActive Noise Cancellation (ANC): Reduces ambient noise, allowing for clearer audio during calls and music playback.\n\nConnectivity: Supports both Bluetooth and USB Type-C connections, offering flexibility across various devices.\n\nDesign: On-ear headphones with a lightweight and comfortable build, suitable for extended use.\n\nBattery Life: Provides up to 14 hours of continuous use on a single charge.\n\nCompatibility: Compatible with laptops, smartphones, and other devices supporting Bluetooth or USB Type-C connectivity.', 'Accessories', 'R2,000', '12');
  
CREATE TABLE `arize_db`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `full_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `address` VARCHAR(300) NOT NULL,
  `reset_token` VARCHAR(255) DEFAULT NULL,
  `reset_expires` DATETIME DEFAULT NULL,
  PRIMARY KEY (`user_id`));

INSERT INTO `arize_db`.`users` (`full_name`, `email`, `password`, `address`)
 VALUES 
('Urswin Faro', 'urswinf@gmail.com', 'urswinfaro', '53 Giants Castle street'),
('Jemaile Mohamed', 'jemaile75@gmail.com', 'Macaws01', '12 Johanneson rd, Penlyn Estate');
 

CREATE TABLE `arize_db`.`admin` (
  `admin_id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`admin_id`));
  
  INSERT INTO `arize_db`.`admin` (`email`, `password`) VALUES ('admin@gmail.com', 'admin123');

  CREATE TABLE `arize_db`.`cart` (
  `cart_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `quantity` INT NOT NULL Default 1,
  PRIMARY KEY (`cart_id`));


CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    payment_method ENUM('Mastercard', 'PayPal') NOT NULL,
    status ENUM('Pending', 'Completed', 'Failed') DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
);
import { motion } from "framer-motion";

const images = [
  "https://scontent.fbom12-2.fna.fbcdn.net/v/t39.30808-6/529944705_1313695157428830_6131998480152643963_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=s8hAHfnTKBYQ7kNvwEjcVne&_nc_oc=AdpZBj_z7OKVFcyKs5mFae5oHVt7qs2_I7IHL_FlsjmSTK7yEFIOj0toOVd3zX8-Y8U&_nc_zt=23&_nc_ht=scontent.fbom12-2.fna&_nc_gid=KJHBr6VgA4F94GqwDLgXrA&_nc_ss=7a32e&oh=00_AfxMpFNuSGZ6bwztpfOQ_BRng4sVxlufUdavohIQ4r7vBA&oe=69C739C6",
  "https://scontent.fbom12-2.fna.fbcdn.net/v/t51.82787-15/531559946_18419152612101436_6873740758821821311_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=kM7MdXwuqG4Q7kNvwFb76qx&_nc_oc=AdoLdrWIQROSDvaPBpsO-w1eyBXNNhm_7N7tcDvusnK9Eyqkpg4ZEIABmVPuBAi52oQ&_nc_zt=23&_nc_ht=scontent.fbom12-2.fna&_nc_gid=dBWic5AUen2U4qRJbYGqCA&_nc_ss=7a32e&oh=00_AfxTleqzqAuGe_LOCYJDkjPCzH34S6kccEr8VAdCEnleow&oe=69C7575C",
  "https://scontent.fbom12-2.fna.fbcdn.net/v/t51.75761-15/468298473_18381319318101436_5337639561053153680_n.jpg?stp=dst-jpegr_tt6&_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=0YV2IY1_5CoQ7kNvwHifOkr&_nc_oc=AdrqGg7HI5ZzUX8FSYzuwMt8dzcoI4HJg1-gsk-xGkzJKkYuhG36AXEzhOPhL2JiyBk&_nc_zt=23&se=-1&_nc_ht=scontent.fbom12-2.fna&_nc_gid=4u4Bc3vKyn0hzaYdcOkZ4w&_nc_ss=7a32e&oh=00_AfyKQaKOUGdGiqO3BOFZnRq8cJyvgaNwePPQW_Fv94px_A&oe=69C73E10",
  "https://scontent.fbom12-1.fna.fbcdn.net/v/t51.82787-15/537395913_18420283528101436_6957223692358710201_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=FBjSgw1TBXUQ7kNvwFhAByH&_nc_oc=AdpaJzubiVl2fJzwT0BEYcVEhuBDlOnL3BEh9mdgd__S63-5Tdu--Kp8rAzk4eMJTSk&_nc_zt=23&_nc_ht=scontent.fbom12-1.fna&_nc_gid=6LY7iK1OUyjQwDFMzE-_VQ&_nc_ss=7a32e&oh=00_AfwIxICE_DFHb9WtSqzSP6DbaRCX-_KXOVqgyagXiOz1hA&oe=69C74F04",
  "https://scontent.fbom12-2.fna.fbcdn.net/v/t51.82787-15/531671719_18419345434101436_5770262141625434458_n.jpg?stp=dst-jpegr_tt6&_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=N6dBwSbDABgQ7kNvwGqkS53&_nc_oc=AdpJA6YNBf4AKywN4nM5Y4YCQ4x0ynOwctcZQAJjVrN932uU_8wrb1D47MwbzCxYOwc&_nc_zt=23&se=-1&_nc_ht=scontent.fbom12-2.fna&_nc_gid=jICzgrlwmwcq--IgRyRDpQ&_nc_ss=7a32e&oh=00_AfxYSy8V59hZAF7YkmrrOpJzBkwrTf7PVXFd7gHBDKr1qg&oe=69C7621E",
  "https://scontent.fbom12-1.fna.fbcdn.net/v/t39.30808-6/548891478_1348668597264819_1279085727719556245_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ZJqxkv-LZe4Q7kNvwE-ngOg&_nc_oc=AdrwOIKN1eGtS2_GQ0J53ivWdWEWycXRGsTZ8419dljkzZPupK6i86O-VruCY5CDJek&_nc_zt=23&_nc_ht=scontent.fbom12-1.fna&_nc_gid=L_HR07QgW_8E8xfwGNBAMA&_nc_ss=7a32e&oh=00_AfwzpijX6RbgpnXvDoYKXNHJVnSafPr5xP0C3aZaRUcdVQ&oe=69C74937",
  "https://scontent.fbom12-2.fna.fbcdn.net/v/t51.82787-15/573607412_18433030939101436_7818670131543350827_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=vmaT7uvQonAQ7kNvwH6TQBY&_nc_oc=AdqHaKsoeXJJ3x8enVrHl1_nwmx6apJZveYfdZRIwclKau7uJ02B-POGWWTn2v7F56I&_nc_zt=23&_nc_ht=scontent.fbom12-2.fna&_nc_gid=GYXbdtlKa1xBYzGszTpz_A&_nc_ss=7a32e&oh=00_Afx6E6nZsrYuvvizvrDTCrBEhUQrhuhy2Qqo_vdcm3T5LA&oe=69C74BAE",
  "https://scontent.fbom12-2.fna.fbcdn.net/v/t51.82787-15/573133520_18431972254101436_7527138204941380736_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=Zy8B0L2ItbgQ7kNvwE0BI0G&_nc_oc=Adr8jaTFfj3kpGlh9eTKScnnx2fwQj9PlzTcTeBOFgGk0slS6RCB8w_dPdcPom1ZfbA&_nc_zt=23&_nc_ht=scontent.fbom12-2.fna&_nc_gid=dwilEihEUfIa24H6oFwy5w&_nc_ss=7a32e&oh=00_Afz4a7ER0tGPHuAqMs4LU_A5CbE76HAD7SAx9lnLGkJm9A&oe=69C74E56"
];

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-serif text-rose-900 mb-4">
          Bridal Portfolio
        </h1>
        <p className="text-lg text-rose-700 font-light max-w-2xl mx-auto">
          A collection of my favorite bridal looks and skincare transformations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl shadow-lg aspect-w-4 aspect-h-5"
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
              <span className="text-white font-serif tracking-wider uppercase text-sm">
                View Details
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

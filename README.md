<!-- ReactJS kullanarak alışveriş sitesi, e-ticaret uygulaması geliştireceğiz. Bu projede ürünleri gösterme, sepete ekleme, inceleme, ödeme, sipariş verme ve görüntüleme gibi temel işlevlere sahip bir e-ticaret sitesini tekrar gözden geçireceğiz.

Proje Gereksinimleri:

Global State Yönetimi: Redux Toolkit kullanacağız. Context API yerine Redux Toolkit, daha gelişmiş state yönetimi sunar.
Stil ve Tasarım: Stil uygulamaları için Tailwind CSS kullanacağız. Tailwind ile sayfa düzenini ve stilini hızlı ve modüler bir şekilde oluşturabilirsiniz.
Veri Yönetimi: API çağrısı yapılmayacak. Ürün verilerini içeren JSON dosyasından sahte veriler kullanılacak.
Yönlendirme: Sayfa geçişleri için react-router-dom kütüphanesi kullanılacak.
Kadın ve Erkek Giyim Linkleri: Kadın ve erkek giyim markaları için yerleştirilen linklerin işlevsel hale getirilmesi gerekiyor. Bu bağlantılar ilgili sayfalara yönlendirmeli ve o kategoriye ait ürünleri göstermelidir.

Başlangıç Adımları:
Terminali açın ve Vite ile projeyi başlatmak için aşağıdaki komutları çalıştırın

npm create vite@latest shopinn -- --template react
cd shopinn
npm install
npm install @reduxjs/toolkit react-redux tailwindcss postcss autoprefixer react-router-dom
npx tailwindcss init -p

Klasör Yapısı:

src klasörü altında components, redux ve mockData klasörlerini oluşturmalısınız

Uygulama Yapısı ve Bileşenler: Uygulamanızı daha modüler hale getirmek için çeşitli React bileşenleri oluşturmanız gerekecek. Örneğin:

Item.jsx: Tek bir ürünü temsil eden bileşen.
ItemList.jsx: Ürün listesini temsil eden bileşen. HomePage.jsx bileşeninde bu liste gösterilecek.
CategoryPage.jsx: Kadın ve erkek giyim kategorilerindeki ürünleri göstermek için yeni bir sayfa bileşeni ekleyin. CategoryPage bileşeni, yönlendirmeler aracılığıyla seçilen kategoriye ait ürünleri listelemelidir.

Ürünleri Kategorilere Göre Filtreleme:

mockData Yapısı: mockData içindeki JSON verisinde her bir ürünün size, occasion, brand gibi özellikleri bulunmaktadır. Bu özellikleri kullanarak Kadın, Erkek, Giyim ve Markalar gibi kategori filtrelemeleri oluşturabilirsiniz.

Redux Slice Yapısı:

itemsSlice.js dosyasına, örneğin filterByCategory gibi bir action ekleyin. Bu action, category, size, brand veya occasion gibi özelliklere göre ürünleri filtreleyebilir. Örneğin Kadın kategorisine göre filtreleme yapılacaksa sadece ilgili ürünleri getirmelidir.

Linklere Tıklama ve Filtreleme:

Navbar'daki "Kadın", "Erkek", "Giyim" ve "Markalar" gibi linklere tıklanıldığında ilgili kategoriye yönlendirme yapılacak şekilde react-router-dom ile route ayarlarını yapın.
Her bir link tıklandığında dispatch(filterByCategory("Kadın")) gibi bir action çağırarak ilgili kategoriye ait ürünlerin filtrelenmesini sağlayın.

<Link to="/category/women" onClick={() => dispatch(filterByCategory("Kadın"))}>Kadın</Link>
<Link to="/category/men" onClick={() => dispatch(filterByCategory("Erkek"))}>Erkek</Link>

CategoryPage.js Bileşeni:

Kategorilere göre filtrelenmiş ürünleri gösterecek bir CategoryPage.js bileşeni oluşturun. Bu sayfa itemsSlice üzerinden filtrelenen ürünleri alıp ekrana listeler.
Route ayarlarında "/category/" şeklinde dinamik bir yol tanımlayın. 
Bu sayede URL üzerinden gelen kategori ismine göre ürünleri filtreleyebilirsiniz.

Redux ile Global State Yönetimi:

Ürün listesi, sepet durumu ve kullanıcı bilgileri gibi verileri yönetmek için Redux Toolkit kullanın.
redux/slices altında her fonksiyon için ayrı slice dosyaları oluşturun. cartSlice.js, itemsSlice.js gibi.

Tailwind CSS ile Tasarım:

Tailwind class'larını doğrudan bileşenlerinizde kullanarak stil uygulayın.

Açıklayıcı Yorum Satırları:

Kodun anlaşılabilir ve düzenli olması için her bileşen, fonksiyon ve önemli kod bloğuna açıklayıcı yorum satırları ekleyin. Yorumlarda fonksiyonların amacını, veri akışını ve özellikle karmaşık görünen kısımların işlevini belirtin. Kodunuzu inceleyen bir başkasının kolayca anlayabilmesi için bu yorumlar çok önemli. -->
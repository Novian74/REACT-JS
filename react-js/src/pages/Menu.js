import { useState } from "react";

function Menu() {
    const [menus, setMenu] = useState(
        [
            { idmenu: 1, idkategori: 1, menu: "Apel Malang", gambar: "apel.jpg", harga: 3000 },
            { idmenu: 2, idkategori: 2, menu: "Nasi Goreng", gambar: "nasigoreng.jpg", harga: 10000 },
            { idmenu: 3, idkategori: 2, menu: "Rendang", gambar: "rendang.jpg", harga: 15000 },
            { idmenu: 4, idkategori: 3, menu: "Es Teh", gambar: "esteh.jpg", harga: 2000 },
            { idmenu: 5, idkategori: 4, menu: "Es Buah", gambar: "esbuah.jpg", harga: 7000 },
            { idmenu: 6, idkategori: 1, menu: "Pisang Sidoarjo", gambar: "pisang.jpg", harga: 2000 }
        ]
    )
    return (
        <div className="App">
            <h1>Menu Restoran</h1>
            <div>
                {menus.map((data) => (
                    <li key={data.idmenu}>{data.menu} Rp {data.harga}</li>
                ))}
            </div>
        </div>
    );
}

export default Menu;

import Image from "next/image";


export default function Home() {
  return (
      <main className="flex items-center h-screen relative bg-cover bg-[url('/assets/latest.png')]">
          <div className="absolute right-10 md:right-40 bottom-0 z-[10]/">
          <Image
              src="/assets/latest1.png"
              alt="MoustacheMan"
              width={560}
              height={560}
              className="w-[300px] h-[300px] z-[1] md:h-[560px] md:w-[560px]"
          />
        </div>


        <div className="flex flex-col gap-3 z-[10] pl-40 pt-20 ">
          <h1 className="text-[50px] text-gray-950 max-w-[500px]">
            {"  "}
            <span className="text-red-500"> Proroctwo Ithlinne </span>
          </h1>
          <p className="text-gray-950 md:text-red-500 text-[16px] mb-10 md:pb-2 max-w-[600px]">
              Zaprawdę powiadam wam, oto nadchodzi wiek miecza i topora, wiek wilczej zamieci. Nadchodzi Czas Białego Zimna i Białego Światła, Czas Szaleństwa i Czas Pogardy, Tedd Deireádh, Czas Końca. Świat umrze wśród mrozu, a odrodzi się wraz z nowym słońcem. Odrodzi się ze Starszej Krwi, z Hen Ichaer, z zasianego ziarna. Ziarna, które nie wykiełkuje, lecz wybuchnie płomieniem. Ess'tuath esse! Tak będzie! Wypatrujcie znaków! Jakie to będą znaki, rzeknę wam - wprzód spłynie ziemia krwią Aen Seidhe, Krwią Elfów...
          </p>
          <div className="relative w-[100px] h-[100px] md:w-[160px] md:h-[160px] mt-5" >
            <Image
                src="/assets/rounded-text.png"
                alt="projects"
                width={160}
                height={160}
                className="slow-spin"
            />
          </div>
        </div>

      </main>
  );
}

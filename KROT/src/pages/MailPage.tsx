import {ElementRef, ReactNode, useRef} from "react";
import {Link, Outlet, useNavigate} from "react-router-dom";
import Window from "@components/Window.tsx";
import HomeScreenImg from "@assets/HomeScreen.png";
import emergencyExitGreenImg from "@assets/EmergyncyExitGreen.png";

function BaseForm({children}: { children?: ReactNode }) {
  return (
    <form style={{width: "619.5px", height: "422px", gridTemplateRows: "140px auto"}} className={"grid items-center"}>
      <svg className={"absolute z-0"} width="619.5" height="422" viewBox="0 0 1239 844" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i_5_91)">
          <path d="M0 0H1239V844H0V0Z" fill="#DCB06E" fillOpacity="0.5"/>
        </g>
        <path d="M3.5 3.5H1235.5V840.5H3.5V3.5Z" stroke="black" strokeWidth="7"/>
        <defs>
          <filter id="filter0_i_5_91" x="0" y="0" width="1239" height="848"
                  filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix"
                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_5_91"/>
          </filter>
        </defs>

      </svg>
      <div className={"flex z-10 text-center border-black border-4 text-5xl h-20 bg-orange-100 justify-center"}><span
        className={"my-auto"}>Спецоперация КРОТ</span></div>
      {children}
    </form>
  )
}

export function MailPage() {
  const ref = useRef<ElementRef<"button">>(null)
  window.ref = ref
  const navigate = useNavigate()
  return (
    <div className={"flex justify-center"}>
      <Window w={1108.2} h={752.5} backgroundImg={HomeScreenImg}>
        <Outlet></Outlet>
      </Window>
      <div className={"relative z-10"}>
        <button ref={ref} className={"hover_size z-10"} onClick={() => {
          navigate(-1)
        }} style={{
          position: "absolute",
          top: "100px",
          left: "-1049px",
          width: "60px",
          height: "60px",
          backgroundImage: `url(${emergencyExitGreenImg})`
        }}>
        </button>
      </div>
    </div>
  )
}

export function MailOutlet() {
  return (
    <BaseForm>
      <Link className={"z-10 justify-self-center"} to={"/mail/mail"}>
        <button type={"submit"}
                className={"z-10 border-black justify-self-center border-4 h-20 text-4xl bg-orange-100 w-[450px] hover:border-green-700"}>Почта
        </button>
      </Link>
      <Link className={"z-10 justify-self-center"} to={"/mail/notes"}>
        <button type={"submit"}
                className={"z-10 border-black justify-self-center border-4 h-20 text-4xl bg-orange-100 w-[450px] hover:border-green-700"}>Заметки
        </button>
      </Link>
    </BaseForm>
  )
}

function MailBaseForm({children}: { children?: ReactNode }) {
  return (
    <form style={{width: "853px", height: "422px", gridTemplateRows: "repeat(auto-fill, 20px)", gridTemplateColumns: "repeat(auto-fill, 20px)"}} className={"grid items-center"}>
      <svg className={"mt-[400px]"} width="857" height="631" viewBox="0 0 857 631" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i_226_3)">
          <path d="M0 0H857V630.48H0V0Z" fill="#DCB06E" fill-opacity="0.5"/>
        </g>
        <path d="M3.5 3.5H853.5V626.98H3.5V3.5Z" stroke="black" stroke-width="7"/>
        <rect x="2" y="59.52" width="853" height="105.811" fill="#FBE9D8" stroke="black" stroke-width="4"/>
        <path d="M339.74 101.919C339.64 102.185 339.59 102.402 339.59 102.569C339.59 103.002 339.873 103.469 340.44 103.969C341.14 104.569 341.573 104.985 341.74 105.219L339.74 106.569L340.39 107.219L339.74 107.919C339.707 107.985 339.69 108.102 339.69 108.269C339.69 108.535 339.857 108.819 340.19 109.119C340.457 109.352 340.657 109.535 340.79 109.669C340.957 109.802 341.057 109.885 341.09 109.919L339.74 111.219C339.707 111.385 339.69 111.585 339.69 111.819C339.69 112.452 339.707 113.002 339.74 113.469C339.807 113.902 339.857 114.302 339.89 114.669C339.957 115.002 340.007 115.319 340.04 115.619C340.107 115.919 340.14 116.235 340.14 116.569C340.14 117.035 340.057 117.569 339.89 118.169C339.757 118.769 339.49 119.569 339.09 120.569L338.39 123.969C338.39 124.702 338.623 125.335 339.09 125.869C338.59 126.469 338.34 127.252 338.34 128.219C338.34 129.219 338.59 129.985 339.09 130.519C339.457 131.085 340.407 131.619 341.94 132.119C343.273 132.552 343.94 133.219 343.94 134.119C343.94 134.452 343.873 134.819 343.74 135.219C343.073 134.985 342.273 134.869 341.34 134.869C340.873 134.869 340.307 134.919 339.64 135.019C338.973 135.085 338.19 135.202 337.29 135.369C335.357 135.735 334.057 135.919 333.39 135.919C331.19 135.919 329.757 134.785 329.09 132.519C329.523 132.085 330.19 131.869 331.09 131.869H331.89C332.057 131.902 332.207 131.919 332.34 131.919C332.473 131.919 332.573 131.919 332.64 131.919C333.84 131.919 334.657 131.452 335.09 130.519C334.59 129.985 334.34 129.385 334.34 128.719C334.34 128.619 334.557 127.719 334.99 126.019C335.023 125.852 335.04 125.702 335.04 125.569C335.073 125.435 335.09 125.285 335.09 125.119C335.09 124.419 334.857 123.785 334.39 123.219C334.657 122.585 334.79 121.735 334.79 120.669C334.79 120.235 334.757 119.769 334.69 119.269C334.657 118.769 334.607 118.219 334.54 117.619C334.44 116.819 334.39 116.102 334.39 115.469C334.39 113.969 334.623 112.785 335.09 111.919C334.857 111.552 334.673 111.135 334.54 110.669C334.407 110.169 334.34 109.569 334.34 108.869V108.519L334.69 104.919C334.69 103.419 334.357 102.319 333.69 101.619C333.023 100.885 332.09 100.519 330.89 100.519C330.723 100.519 330.54 100.519 330.34 100.519C330.14 100.519 329.94 100.535 329.74 100.569C329.273 101.702 329.04 102.952 329.04 104.319V105.319C329.073 105.552 329.09 105.752 329.09 105.919C329.09 106.052 329.09 106.185 329.09 106.319C329.09 107.719 328.873 108.919 328.44 109.919C327.507 109.285 327.04 108.402 327.04 107.269C327.04 106.969 327.057 106.735 327.09 106.569C328.057 106.069 328.54 105.585 328.54 105.119C328.54 104.819 328.273 104.419 327.74 103.919C327.207 103.419 326.94 103.019 326.94 102.719C326.94 102.252 327.44 101.769 328.44 101.269C327.84 99.8354 326.54 99.1187 324.54 99.1187C324.207 99.1187 323.807 99.152 323.34 99.2187C322.873 99.252 322.573 99.2687 322.44 99.2687H322.29C321.957 99.2687 321.557 99.0354 321.09 98.5687V97.2687C321.99 97.702 322.99 97.9187 324.09 97.9187C325.99 97.9187 328.107 97.252 330.44 95.9187H349.04C349.907 96.452 350.973 96.7187 352.24 96.7187C352.773 96.7187 353.34 96.6687 353.94 96.5687C356.64 96.1687 358.24 95.9687 358.74 95.9687H358.89C360.623 96.002 362.007 96.8687 363.04 98.5687C362.84 99.5687 362.123 100.219 360.89 100.519L357.69 101.019C356.59 101.319 356.04 101.952 356.04 102.919C356.04 103.219 356.173 103.869 356.44 104.869C356.673 105.769 356.79 106.569 356.79 107.269C356.79 107.635 356.757 108.085 356.69 108.619C356.657 109.152 356.607 109.785 356.54 110.519C356.34 111.985 356.24 113.035 356.24 113.669C356.24 114.269 356.29 114.785 356.39 115.219L355.74 115.869C356.173 116.169 356.39 116.502 356.39 116.869C356.39 117.069 356.357 117.235 356.29 117.369C356.057 117.869 355.89 118.252 355.79 118.519C355.69 118.752 355.64 118.869 355.64 118.869C355.64 119.235 355.89 119.569 356.39 119.869C356.023 120.135 355.84 120.502 355.84 120.969C355.84 121.335 355.94 121.735 356.14 122.169C356.273 122.535 356.34 122.902 356.34 123.269C356.34 123.835 356.14 124.269 355.74 124.569C356.207 125.102 356.44 125.735 356.44 126.469C356.44 126.669 356.407 126.935 356.34 127.269C356.307 127.569 356.24 127.885 356.14 128.219C356.073 128.519 356.007 128.819 355.94 129.119C355.907 129.419 355.89 129.635 355.89 129.769C355.89 130.802 356.723 131.502 358.39 131.869L359.24 131.819C361.173 131.819 362.223 132.502 362.39 133.869C362.023 134.969 361.24 135.519 360.04 135.519L358.19 135.419C357.423 135.419 356.823 135.569 356.39 135.869H356.09C355.557 135.869 354.84 135.769 353.94 135.569C352.873 135.369 352.123 135.269 351.69 135.269C350.923 135.269 350.273 135.469 349.74 135.869L345.04 133.219C345.473 132.285 346.39 131.819 347.79 131.819C347.857 131.819 347.957 131.819 348.09 131.819C348.257 131.819 348.44 131.835 348.64 131.869H349.44C350.507 131.869 351.273 131.652 351.74 131.219C351.74 130.319 351.94 128.935 352.34 127.069C352.74 125.235 352.94 123.885 352.94 123.019C352.94 122.352 352.89 121.769 352.79 121.269C352.723 120.735 352.64 120.219 352.54 119.719C352.44 119.219 352.34 118.702 352.24 118.169C352.173 117.602 352.14 116.952 352.14 116.219C352.14 115.785 352.157 115.335 352.19 114.869C352.257 114.369 352.323 113.819 352.39 113.219C352.457 113.019 352.49 112.852 352.49 112.719C352.49 112.385 352.323 112.035 351.99 111.669C351.69 111.269 351.373 110.902 351.04 110.569C351.807 109.869 352.19 109.069 352.19 108.169C352.19 107.435 351.873 106.319 351.24 104.819C350.673 103.419 350.39 102.352 350.39 101.619V101.269L347.74 101.919C347.74 103.119 347.957 103.785 348.39 103.919L347.74 104.569V104.819C347.74 104.952 347.74 105.102 347.74 105.269C347.74 105.435 347.723 105.619 347.69 105.819V106.269C347.69 106.635 347.707 106.885 347.74 107.019C347.773 107.385 347.99 107.685 348.39 107.919L346.39 109.919C345.723 109.452 345.173 108.819 344.74 108.019L343.74 105.919C344.173 105.452 344.573 105.219 344.94 105.219H345.04C344.573 102.952 343.24 101.819 341.04 101.819C340.84 101.819 340.623 101.835 340.39 101.869C340.19 101.869 339.973 101.885 339.74 101.919ZM327.09 113.219V113.019C327.09 112.719 327.307 112.352 327.74 111.919H327.94C328.273 111.919 328.657 112.135 329.09 112.569C328.957 113.002 328.29 113.219 327.09 113.219ZM327.09 117.219L327.74 116.569L329.09 117.869C327.89 117.869 327.223 117.652 327.09 117.219ZM401.059 97.8687L402.059 99.1687L401.759 100.869L400.759 102.119L398.509 100.469L398.209 100.319L397.459 101.069L397.159 108.669L398.109 109.869L397.609 111.469L396.509 113.569L397.109 118.269L396.109 120.819V122.569L396.509 123.969V126.469L397.459 128.769L401.059 132.169V134.069L400.059 135.719L399.159 136.269L396.509 136.519L395.609 136.719L392.459 136.269L389.309 136.619L387.709 136.269L384.809 133.919L384.109 133.719L383.609 133.319V132.769L385.109 131.869L388.209 130.969L390.209 128.519V126.469L390.959 125.569L390.709 123.469L389.959 121.769L390.259 120.069L389.959 118.169L391.109 115.919L391.909 112.219L391.409 110.869L392.659 108.969L392.959 108.169L392.759 107.519H391.109L389.559 108.519L389.209 111.319L386.859 113.819L387.059 114.769L385.259 115.919L384.709 117.569L383.709 118.769L383.059 120.969L382.009 122.819L381.759 125.569L379.459 126.969L378.509 130.969L378.059 131.419L378.159 132.169L379.459 132.769L379.709 133.569V133.919L376.459 135.919H365.559L364.809 135.369L364.059 134.419L364.159 132.319L365.559 131.219L368.259 130.819L368.859 129.469V126.719L368.509 126.169V124.919L370.259 123.269L368.859 121.219L369.359 118.269L368.609 115.669L369.359 109.869V106.719L369.759 104.819L369.259 103.719L368.509 103.219V100.119L366.359 99.8187L364.609 98.1687L364.809 96.8687L365.559 96.3187H374.459L376.059 96.7187H377.209L377.559 97.1687L377.209 99.1687L376.459 100.819L374.409 102.669L374.809 105.519L374.309 106.919L374.409 109.419L374.809 110.019L374.009 111.469V113.569L374.809 114.419V115.669L373.459 118.169L373.509 119.119L374.009 119.519V120.369L372.209 121.919L372.309 122.719L373.509 123.719L374.959 123.569L378.509 120.469L379.009 118.169L379.959 116.869L379.709 114.769L381.609 113.169L382.009 111.319L383.709 109.569L384.259 105.519L386.859 101.869L387.059 100.819L386.759 99.6187L386.209 99.1687L387.859 96.8187L390.459 96.1687L392.209 95.9187H398.259L399.959 95.6187L401.059 97.8687ZM428.672 121.369C429.139 122.035 429.372 122.769 429.372 123.569C429.372 124.302 429.156 125.269 428.722 126.469C428.256 127.735 428.006 128.652 427.972 129.219C427.139 129.552 426.489 130.419 426.022 131.819C425.589 133.152 424.939 134.019 424.072 134.419C421.872 135.419 419.689 135.919 417.522 135.919C415.989 135.919 414.272 135.635 412.372 135.069C408.239 132.335 405.406 128.869 403.872 124.669C404.339 124.202 404.572 123.735 404.572 123.269C404.572 122.902 404.339 122.285 403.872 121.419C403.672 121.019 403.506 120.685 403.372 120.419C403.272 120.119 403.222 119.835 403.222 119.569V119.419C403.122 118.419 403.072 117.452 403.072 116.519C403.072 114.552 403.356 112.519 403.922 110.419C403.989 110.219 404.122 109.769 404.322 109.069C404.556 108.369 404.856 107.419 405.222 106.219L405.822 104.419C406.456 100.585 409.722 97.7687 415.622 95.9687C415.756 95.9354 415.956 95.9187 416.222 95.9187C417.289 95.9187 418.622 96.2187 420.222 96.8187C422.322 97.5854 423.806 97.9687 424.672 97.9687C425.572 97.9687 426.456 97.7354 427.322 97.2687C428.689 100.069 429.372 103.352 429.372 107.119C429.372 109.219 429.139 111.152 428.672 112.919H428.522C427.456 112.919 426.572 112.335 425.872 111.169C425.406 110.402 424.956 109.785 424.522 109.319C424.122 108.852 423.756 108.535 423.422 108.369C424.322 107.869 424.772 107.319 424.772 106.719C424.772 106.385 424.422 105.735 423.722 104.769C423.089 103.902 422.772 103.185 422.772 102.619V102.469C422.406 102.135 421.989 101.852 421.522 101.619C421.056 101.352 420.539 101.102 419.972 100.869C419.439 100.702 418.922 100.535 418.422 100.369C417.922 100.202 417.422 100.035 416.922 99.8687C416.756 100.002 416.406 100.219 415.872 100.519C415.339 100.785 414.606 101.169 413.672 101.669C413.672 101.669 413.606 101.702 413.472 101.769C412.106 102.469 411.306 103.135 411.072 103.769C410.039 104.835 409.356 106.352 409.022 108.319C408.789 109.519 408.556 110.502 408.322 111.269C408.122 112.035 407.939 112.585 407.772 112.919C407.872 113.285 407.922 113.669 407.922 114.069L407.722 117.069C407.722 118.469 408.172 119.469 409.072 120.069C408.639 120.269 408.422 120.652 408.422 121.219V122.669L410.422 124.669L409.722 125.319C410.722 125.785 411.572 126.852 412.272 128.519C412.872 130.019 413.772 130.902 414.972 131.169C415.139 131.202 415.322 131.235 415.522 131.269C415.722 131.269 415.906 131.269 416.072 131.269C417.772 131.269 419.456 130.519 421.122 129.019C421.956 128.285 423.156 126.835 424.722 124.669V124.519C424.722 124.219 424.589 123.869 424.322 123.469C424.089 123.035 423.972 122.719 423.972 122.519C423.972 122.385 424.006 122.219 424.072 122.019C424.439 121.952 424.972 121.719 425.672 121.319C426.406 120.885 426.989 120.669 427.422 120.669C427.889 120.669 428.306 120.902 428.672 121.369ZM451.717 97.5187L452.017 99.5687C451.884 99.7354 451.784 99.9354 451.717 100.169C451.651 100.369 451.567 100.585 451.467 100.819C451.401 101.019 451.317 101.202 451.217 101.369C451.151 101.502 451.051 101.569 450.917 101.569C450.817 101.569 450.701 101.502 450.567 101.369C450.434 101.202 450.284 101.019 450.117 100.819C449.984 100.619 449.817 100.452 449.617 100.319C449.417 100.152 449.201 100.069 448.967 100.069C448.701 100.069 448.467 100.135 448.267 100.269C448.067 100.402 447.884 100.552 447.717 100.719C447.551 100.852 447.401 100.985 447.267 101.119C447.167 101.252 447.067 101.319 446.967 101.319C446.334 101.319 445.767 102.002 445.267 103.369C445.434 103.602 445.517 103.919 445.517 104.319C445.517 104.452 445.501 104.602 445.467 104.769C445.467 104.935 445.451 105.102 445.417 105.269C445.317 106.135 445.267 106.785 445.267 107.219V107.619C445.401 108.452 445.851 109.069 446.617 109.469C445.684 109.702 445.217 110.452 445.217 111.719C445.217 111.819 445.217 111.952 445.217 112.119C445.217 112.252 445.234 112.402 445.267 112.569V113.419C445.267 114.419 445.051 115.135 444.617 115.569C444.684 115.535 444.784 115.519 444.917 115.519C445.084 115.519 445.301 115.635 445.567 115.869C445.834 116.102 446.017 116.219 446.117 116.219C446.317 116.219 446.484 116.002 446.617 115.569C446.784 115.535 446.934 115.519 447.067 115.519C447.234 115.485 447.401 115.469 447.567 115.469C447.834 115.469 448.151 115.502 448.517 115.569C448.917 115.635 449.384 115.735 449.917 115.869C451.051 116.135 451.817 116.269 452.217 116.269C453.584 116.269 454.617 116.319 455.317 116.419C456.051 116.519 456.617 116.669 457.017 116.869C457.417 117.069 457.717 117.302 457.917 117.569C458.151 117.835 458.434 118.135 458.767 118.469C458.867 118.569 458.984 118.769 459.117 119.069C459.284 119.335 459.584 119.685 460.017 120.119C460.851 120.952 461.267 121.719 461.267 122.419C461.267 122.819 461.134 123.252 460.867 123.719C461.534 124.285 461.867 124.952 461.867 125.719C461.867 126.285 461.584 127.269 461.017 128.669C460.751 129.335 460.551 129.919 460.417 130.419C460.284 130.919 460.217 131.352 460.217 131.719V131.869C459.617 132.969 458.817 133.819 457.817 134.419C456.817 135.019 455.517 135.319 453.917 135.319L452.717 135.219C452.551 134.319 452.084 133.869 451.317 133.869C450.751 133.869 450.084 134.102 449.317 134.569C448.584 135.069 448.151 135.519 448.017 135.919C447.584 135.852 447.084 135.819 446.517 135.819C445.984 135.819 445.384 135.819 444.717 135.819C444.151 135.819 443.551 135.819 442.917 135.819C442.284 135.819 441.601 135.835 440.867 135.869C439.801 135.902 438.817 135.919 437.917 135.919C437.017 135.952 436.217 135.969 435.517 135.969C435.017 135.969 434.567 135.952 434.167 135.919C433.767 135.919 433.401 135.919 433.067 135.919C433.001 135.752 432.884 135.619 432.717 135.519C432.584 135.385 432.434 135.269 432.267 135.169C432.101 135.069 431.951 134.969 431.817 134.869C431.684 134.769 431.617 134.635 431.617 134.469C431.617 134.402 431.651 134.202 431.717 133.869C435.651 133.302 438.134 132.852 439.167 132.519C439.201 132.385 439.501 131.585 440.067 130.119C440.467 129.119 440.667 128.352 440.667 127.819C440.667 127.552 440.617 127.319 440.517 127.119C440.517 126.785 440.517 126.435 440.517 126.069C440.517 125.669 440.534 125.235 440.567 124.769C440.601 124.202 440.617 123.735 440.617 123.369C440.617 122.969 440.617 122.685 440.617 122.519C440.617 120.719 440.367 119.085 439.867 117.619C440.001 117.385 440.067 116.985 440.067 116.419C440.067 116.185 440.051 115.935 440.017 115.669C440.017 115.402 440.001 115.085 439.967 114.719C439.934 114.552 439.917 114.385 439.917 114.219C439.917 114.052 439.917 113.885 439.917 113.719C439.917 112.752 440.117 112.019 440.517 111.519C440.117 110.785 439.917 109.902 439.917 108.869C439.917 108.335 439.967 107.769 440.067 107.169V106.719L440.117 106.569C440.217 105.969 440.267 105.435 440.267 104.969C440.267 104.102 440.134 103.352 439.867 102.719C439.267 101.352 438.334 100.669 437.067 100.669C436.534 100.669 435.801 100.785 434.867 101.019C433.967 101.252 433.284 101.369 432.817 101.369C431.651 101.369 430.834 100.685 430.367 99.3187C430.867 97.5187 432.101 96.6187 434.067 96.6187C434.334 96.6187 434.684 96.6354 435.117 96.6687C435.551 96.702 436.051 96.752 436.617 96.8187C437.217 96.8854 437.734 96.952 438.167 97.0187C438.634 97.052 439.001 97.0687 439.267 97.0687C440.701 97.0687 441.801 96.6854 442.567 95.9187C443.667 96.3854 445.117 96.6187 446.917 96.6187H450.617C450.651 96.6187 450.717 96.6687 450.817 96.7687C450.951 96.8687 451.067 96.9687 451.167 97.0687C451.301 97.1687 451.417 97.2687 451.517 97.3687C451.617 97.4687 451.684 97.5187 451.717 97.5187ZM456.817 128.469C457.317 127.935 457.567 127.335 457.567 126.669C457.567 126.002 457.301 125.252 456.767 124.419C456.534 124.052 456.317 123.702 456.117 123.369C455.917 123.035 455.701 122.702 455.467 122.369H455.217C454.784 122.369 454.267 122.319 453.667 122.219C453.067 122.085 452.367 121.919 451.567 121.719C449.767 121.252 448.501 121.019 447.767 121.019C446.134 121.019 444.851 121.685 443.917 123.019C444.784 123.485 445.217 124.069 445.217 124.769C445.217 124.902 445.184 125.085 445.117 125.319C445.084 125.552 445.017 125.802 444.917 126.069C444.851 126.335 444.784 126.602 444.717 126.869C444.684 127.102 444.667 127.285 444.667 127.419C444.667 128.085 445.101 128.652 445.967 129.119C445.501 129.585 445.101 129.819 444.767 129.819H444.617C444.984 131.685 445.817 132.619 447.117 132.619C447.651 132.619 448.717 132.335 450.317 131.769C450.917 131.569 451.434 131.419 451.867 131.319C452.334 131.185 452.734 131.119 453.067 131.119C453.134 131.119 453.184 131.135 453.217 131.169C453.284 131.169 453.351 131.169 453.417 131.169C453.917 131.135 454.501 130.785 455.167 130.119C456.167 129.085 456.717 128.535 456.817 128.469ZM454.967 101.419C454.934 101.452 454.851 101.552 454.717 101.719C454.584 101.852 454.401 102.052 454.167 102.319C453.867 102.685 453.567 102.869 453.267 102.869C453.134 102.869 453.017 102.852 452.917 102.819L454.267 99.4187L454.967 101.419ZM452.267 104.169L450.917 105.519L450.217 103.469C451.384 103.469 452.067 103.702 452.267 104.169ZM448.667 108.819V110.169H448.017V108.819H448.667ZM492.237 96.7187C492.503 96.752 492.753 96.7854 492.987 96.8187C493.22 96.8187 493.42 96.8187 493.587 96.8187C494.587 96.8187 495.47 96.5187 496.237 95.9187C496.77 96.352 498.103 96.5687 500.237 96.5687C500.47 97.002 500.587 97.3854 500.587 97.7187C500.587 98.2854 500.087 98.7854 499.087 99.2187C498.087 99.6854 497.57 100.135 497.537 100.569C497.337 100.502 497.153 100.469 496.987 100.469C496.653 100.469 496.303 100.635 495.937 100.969C495.57 101.302 495.22 101.619 494.887 101.919C495.387 105.085 495.637 109.585 495.637 115.419C495.637 116.019 495.637 116.902 495.637 118.069C495.637 119.235 495.62 120.702 495.587 122.469C495.553 123.869 495.537 125.069 495.537 126.069C495.537 127.069 495.537 127.902 495.537 128.569C495.97 130.102 497.303 131.219 499.537 131.919L500.237 131.269C500.703 131.669 500.937 132.285 500.937 133.119C500.937 133.185 500.937 133.319 500.937 133.519C500.937 133.719 500.92 133.952 500.887 134.219C500.853 134.385 500.837 134.585 500.837 134.819C500.837 135.052 500.853 135.202 500.887 135.269C500.82 135.269 500.753 135.285 500.687 135.319C500.62 135.319 500.553 135.319 500.487 135.319C500.32 135.319 500.07 135.285 499.737 135.219H496.087C494.453 135.219 493.17 135.452 492.237 135.919C492.17 135.919 492.103 135.919 492.037 135.919C491.97 135.885 491.903 135.869 491.837 135.869C491.203 135.802 490.42 135.719 489.487 135.619C488.587 135.519 487.503 135.402 486.237 135.269C485.97 134.569 485.837 134.035 485.837 133.669C485.837 132.669 486.67 131.935 488.337 131.469C490.003 130.969 490.837 130.352 490.837 129.619C490.837 129.185 490.637 128.619 490.237 127.919C490.703 127.652 490.937 127.152 490.937 126.419C490.937 126.352 490.937 126.252 490.937 126.119C490.937 125.952 490.92 125.735 490.887 125.469C490.853 125.369 490.837 125.202 490.837 124.969C490.837 124.802 490.853 124.669 490.887 124.569L489.537 123.269C490.237 122.902 490.67 122.302 490.837 121.469C490.87 121.369 490.887 120.635 490.887 119.269C490.42 118.802 490.02 118.569 489.687 118.569H489.537C490.47 117.935 490.937 117.052 490.937 115.919C490.937 115.652 490.92 115.435 490.887 115.269C490.153 115.069 489.787 114.735 489.787 114.269C489.787 113.869 490.087 113.235 490.687 112.369C491.287 111.469 491.587 110.869 491.587 110.569C491.587 110.102 491.053 109.869 489.987 109.869C489.82 109.869 489.653 109.869 489.487 109.869C489.32 109.869 489.12 109.885 488.887 109.919C488.82 110.119 488.637 110.435 488.337 110.869C488.037 111.269 487.653 111.802 487.187 112.469C486.387 113.535 485.987 114.369 485.987 114.969C485.987 115.269 486.07 115.585 486.237 115.919H488.237C488.003 116.152 487.537 116.435 486.837 116.769C486.237 117.069 485.803 117.452 485.537 117.919C485.437 118.185 485.387 118.419 485.387 118.619C485.387 119.019 485.67 119.402 486.237 119.769C487.037 120.202 487.47 120.469 487.537 120.569L486.887 121.269C486.72 120.802 486.053 120.569 484.887 120.569C484.12 121.035 483.737 121.652 483.737 122.419C483.737 122.952 483.903 123.452 484.237 123.919C484.07 123.952 483.837 123.969 483.537 123.969C482.637 123.969 481.703 123.602 480.737 122.869C480.07 122.402 479.52 122.035 479.087 121.769C478.687 121.502 478.403 121.335 478.237 121.269V121.219C478.237 120.952 478.337 120.619 478.537 120.219C478.77 119.785 478.887 119.485 478.887 119.319C478.887 119.019 478.67 118.769 478.237 118.569H477.537C478.037 117.969 478.287 117.369 478.287 116.769C478.287 116.002 477.737 114.985 476.637 113.719C475.503 112.385 474.92 111.335 474.887 110.569C473.487 110.935 472.787 111.802 472.787 113.169C472.787 113.335 472.82 113.585 472.887 113.919C472.953 113.952 473.203 114.235 473.637 114.769C474.003 115.135 474.303 115.319 474.537 115.319C474.703 115.319 474.82 115.302 474.887 115.269L472.887 117.919V118.069C472.887 118.635 473.22 119.035 473.887 119.269C474.953 119.669 475.503 119.885 475.537 119.919C475.237 120.052 474.937 120.185 474.637 120.319C474.337 120.452 474.02 120.602 473.687 120.769C473.053 121.169 472.737 121.685 472.737 122.319C472.737 122.619 472.787 122.935 472.887 123.269C472.953 123.302 473.203 123.585 473.637 124.119C473.97 124.452 474.27 124.619 474.537 124.619C474.703 124.619 474.82 124.602 474.887 124.569C474.853 125.069 474.57 125.652 474.037 126.319C473.703 126.719 473.437 127.052 473.237 127.319C473.07 127.585 472.953 127.785 472.887 127.919C473.853 127.919 474.57 128.552 475.037 129.819C475.503 131.085 476.053 131.719 476.687 131.719C477.053 131.719 477.57 131.569 478.237 131.269C477.737 133.935 476.62 135.485 474.887 135.919L469.337 135.419C468.27 135.319 467.253 135.202 466.287 135.069C465.32 134.902 464.403 134.735 463.537 134.569C463.47 134.302 463.437 134.102 463.437 133.969C463.437 133.502 463.72 133.019 464.287 132.519C465.02 131.885 465.437 131.469 465.537 131.269C465.97 131.469 466.353 131.569 466.687 131.569C467.353 131.569 467.82 131.069 468.087 130.069C468.52 128.735 468.787 128.019 468.887 127.919C468.453 127.352 468.237 126.635 468.237 125.769C468.237 125.602 468.237 125.435 468.237 125.269C468.237 125.069 468.27 124.869 468.337 124.669C468.737 122.535 468.937 121.435 468.937 121.369C468.937 120.602 468.703 119.902 468.237 119.269C468.703 118.802 468.937 118.335 468.937 117.869C468.937 117.835 468.737 117.185 468.337 115.919C468.27 115.785 468.237 115.669 468.237 115.569C468.237 115.435 468.237 115.319 468.237 115.219C468.237 114.752 468.453 114.319 468.887 113.919C468.687 113.385 468.587 112.669 468.587 111.769C468.587 111.102 468.637 110.369 468.737 109.569C468.803 109.302 468.837 109.035 468.837 108.769C468.837 108.502 468.837 108.235 468.837 107.969C468.837 106.935 468.637 106.035 468.237 105.269C468.703 104.735 468.937 104.235 468.937 103.769C468.937 103.235 468.62 102.552 467.987 101.719C467.353 100.852 466.987 100.252 466.887 99.9187H464.787C463.92 99.9187 463.287 99.702 462.887 99.2687C463.253 98.3687 464.137 97.7687 465.537 97.4687C467.403 97.1354 468.52 96.8354 468.887 96.5687C469.22 97.2687 469.82 97.702 470.687 97.8687C470.787 97.902 471.52 97.9187 472.887 97.9187C473.287 97.5187 473.503 97.1687 473.537 96.8687C473.67 97.402 474.37 97.8687 475.637 98.2687C476.97 98.702 477.637 99.1687 477.637 99.6687C477.637 100.102 477.387 100.635 476.887 101.269C477.587 101.535 477.987 102.285 478.087 103.519C478.253 104.785 478.737 105.585 479.537 105.919C479.67 105.485 480.337 105.269 481.537 105.269C481.67 105.502 481.737 105.719 481.737 105.919C481.737 106.285 481.37 106.685 480.637 107.119C479.903 107.519 479.537 108.002 479.537 108.569L482.887 111.919C482.92 111.885 483.003 111.819 483.137 111.719C483.27 111.585 483.47 111.402 483.737 111.169C484.103 110.869 484.287 110.569 484.287 110.269C484.287 110.135 484.27 110.019 484.237 109.919L482.887 108.569C482.953 108.602 483.07 108.619 483.237 108.619C483.503 108.619 483.803 108.452 484.137 108.119C484.57 107.585 484.82 107.302 484.887 107.269V107.319C484.92 107.319 484.937 106.802 484.937 105.769C484.937 105.169 484.703 104.769 484.237 104.569H482.887L486.887 103.269C486.62 102.902 486.487 102.552 486.487 102.219C486.487 101.819 486.77 101.135 487.337 100.169C487.937 99.2354 488.237 98.4854 488.237 97.9187C488.837 97.0187 489.687 96.5687 490.787 96.5687C490.853 96.5687 490.953 96.5854 491.087 96.6187C491.22 96.6187 491.37 96.6187 491.537 96.6187V97.9187H492.237V96.7187ZM474.887 109.269C474.687 107.935 474.237 107.269 473.537 107.269C473.67 107.402 473.737 107.569 473.737 107.769C473.737 107.969 473.603 108.235 473.337 108.569C473.103 108.902 472.987 109.135 472.987 109.269C472.987 109.502 473.17 109.719 473.537 109.919H473.637C474.003 109.919 474.42 109.702 474.887 109.269ZM490.887 107.919V106.569C490.453 106.135 490.07 105.919 489.737 105.919H489.537V107.919H490.887ZM490.887 103.269C490.687 101.935 490.237 101.269 489.537 101.269V101.669C489.537 102.102 489.603 102.435 489.737 102.669C489.937 103.069 490.27 103.269 490.737 103.269H490.887ZM482.237 113.269V111.919H481.537L482.237 113.269ZM492.237 96.7187C492.037 96.7187 491.803 96.6854 491.537 96.6187V96.5687H492.237V96.7187ZM535.749 132.519C535.716 132.552 535.149 132.769 534.049 133.169C533.383 133.402 533.049 133.819 533.049 134.419V134.569C532.316 134.035 531.333 133.769 530.099 133.769C529.866 133.769 529.616 133.769 529.349 133.769C529.116 133.769 528.866 133.802 528.599 133.869C527.333 134.069 526.333 134.235 525.599 134.369C524.899 134.469 524.449 134.519 524.249 134.519H524.149C522.649 134.485 521.566 133.602 520.899 131.869C521.233 130.969 521.966 130.519 523.099 130.519C523.899 130.519 524.516 130.735 524.949 131.169C525.416 130.335 525.649 129.469 525.649 128.569C525.649 126.969 524.966 125.135 523.599 123.069C523.233 123.235 522.833 123.385 522.399 123.519C521.966 123.619 521.466 123.669 520.899 123.669C520.733 123.669 520.616 123.635 520.549 123.569H517.299C514.799 123.569 513.283 124.535 512.749 126.469C513.216 127.935 513.449 128.952 513.449 129.519V129.819C513.583 129.952 514.316 130.219 515.649 130.619C516.649 130.919 517.149 131.385 517.149 132.019C517.149 132.385 517.049 132.785 516.849 133.219C515.683 134.019 513.949 134.535 511.649 134.769C509.183 135.069 507.533 135.452 506.699 135.919C506.166 135.685 505.633 135.469 505.099 135.269C504.566 135.035 504.016 134.802 503.449 134.569C502.449 134.069 501.949 133.219 501.949 132.019V131.869C502.516 131.169 503.699 130.585 505.499 130.119C507.099 129.719 508.166 128.952 508.699 127.819C509.033 126.419 509.366 125.052 509.699 123.719C510.033 122.352 510.383 120.969 510.749 119.569C511.549 116.302 512.449 113.635 513.449 111.569C513.316 111.302 513.249 110.985 513.249 110.619C513.249 110.419 513.299 110.185 513.399 109.919C513.499 109.619 513.599 109.319 513.699 109.019C513.799 108.719 513.899 108.435 513.999 108.169C514.099 107.902 514.149 107.685 514.149 107.519C514.149 107.085 513.916 106.635 513.449 106.169C514.516 106.102 515.149 105.685 515.349 104.919L515.499 102.569C515.566 101.635 516.016 101.035 516.849 100.769C516.483 100.402 516.283 99.7354 516.249 98.7687C516.216 97.7687 515.966 97.0854 515.499 96.7187C516.466 96.1854 517.566 95.9187 518.799 95.9187C519.899 95.9187 520.816 96.1854 521.549 96.7187C521.583 96.9187 521.599 97.1187 521.599 97.3187C521.633 97.5187 521.649 97.7354 521.649 97.9687C521.649 98.302 521.616 98.752 521.549 99.3187C521.516 99.852 521.499 100.219 521.499 100.419C521.499 101.619 522.199 102.635 523.599 103.469C523.033 104.035 522.749 104.619 522.749 105.219C522.749 105.819 523.116 106.835 523.849 108.269C524.616 109.702 524.999 110.802 524.999 111.569C524.999 111.869 524.983 112.102 524.949 112.269C525.083 113.002 525.316 113.985 525.649 115.219C526.016 116.419 526.516 117.885 527.149 119.619C528.216 122.619 528.833 125.119 528.999 127.119V127.369C528.999 128.102 529.449 128.469 530.349 128.469C531.249 128.469 531.699 128.835 531.699 129.569V129.819C531.966 130.219 532.783 130.452 534.149 130.519C535.316 130.585 535.899 130.985 535.899 131.719C535.899 131.952 535.849 132.219 535.749 132.519ZM522.899 119.719V119.219C522.899 117.885 522.533 116.235 521.799 114.269C520.999 112.035 520.599 110.302 520.599 109.069C520.599 108.369 520.699 107.635 520.899 106.869H519.399C518.799 106.869 518.399 106.635 518.199 106.169L520.199 103.469L519.549 102.819C518.183 103.085 517.499 103.902 517.499 105.269L517.749 108.219C517.749 109.219 517.449 109.885 516.849 110.219C517.416 110.885 517.699 111.552 517.699 112.219C517.699 112.785 517.399 113.585 516.799 114.619C516.233 115.685 515.949 116.485 515.949 117.019C515.949 117.719 516.249 118.385 516.849 119.019C517.349 118.519 517.916 118.269 518.549 118.269C519.016 118.269 519.749 118.502 520.749 118.969C521.749 119.435 522.466 119.685 522.899 119.719ZM519.549 110.919L518.849 110.219H519.549V110.919ZM519.549 133.869L518.849 133.219H519.549V133.869Z" fill="black"/>
        <defs>
          <filter id="filter0_i_226_3" x="0" y="0" width="857" height="634.48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_226_3"/>
          </filter>
        </defs>
      </svg>

      {children}
    </form>
  )
}


export function MailMail() {
  return (
    <MailBaseForm>
    </MailBaseForm>
  )
}

export function MailNotes() {
  return (
    <>
    </>
  )
}

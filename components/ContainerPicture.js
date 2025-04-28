import Image from "next/image"
import image  from  "@/public/img/img.jpg"
const ContainerPicture = () => (
    <Image src={image} alt="Mi imagen" width={350} height={100} className="imgPicture"/>
)

export default ContainerPicture
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <Container>
      <Hero />

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle preTitle="Chế độ bảo đảm">
        Đô Thành Việt cam kết bảo đảm cho khách hàng trong vòng 24h kể từ khi
        bàn giao. Chúng tôi làm việc cho đến khi khách hàng hài lòng 100%.
      </SectionTitle>

      <SectionTitle preTitle="Chương trình khuyến mãi">
        Công ty luôn mang các chương trình ưu đãi cho khách hàng mới và khách
        hàng thân thiết. Đặc biệt quý khách kí hợp đồng định kí sẽ được mức ưu
        đãi lớn.
      </SectionTitle>

      <SectionTitle preTitle="Cam kết">
        Với đội ngũ nhân viên nhiệt huyết,công ty Đô Thành Việt luôn đặt quý
        khách lên hàng đầu với cam kết quyên lợi như sau:
        <ul className="text-left list-disc mt-5">
          <li>Giá tối ưu so với thị trường ít nhất 10%.</li>
          <li>
            Máy móc hiện đại, hoá chất nguồn gốc bảo đảm an toàn tuyệt đối.
          </li>
          <li>
            Chất lượng dịch vụ hài lòng, nhân viên với trình độ chuyên môn, lý
            lịch rõ ràng.
          </li>
          <li>Cam kết khách hàng hài lòng với dịch vụ mới nhận thanh toán.</li>
          <li>Sẵn sàng cung cấp dịch vụ chuyên nghiệp 24/24.</li>
        </ul>
      </SectionTitle>
    </Container>
  );
}

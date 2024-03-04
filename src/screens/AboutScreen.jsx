import { Box, Table, Tr, Th, Td, Stack, Image, Flex } from "@chakra-ui/react";

const AboutScreen = () => {
  return (
    <Box minH="100vh" m="15">
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: "10", lg: "20" }}
        alignContent="center"
        justifyItems="center"
      >
        <Table>
          <Tr>
            <Th fontSize="md" minW="150px">
              自我簡介
            </Th>
            <Td>
              <p>
                大學就讀醫學檢驗暨生物技術學系，除了本科系的專業之外，對於有興趣的領域會深入研究，例如：海洋生物、程式語言、咖啡風味、烘焙等等，喜歡把自己丟到一個非舒適圈的環境，為了快速地學會某個技能或是深入了解，滿足好奇心和探險的感覺。
              </p>
              <p>
                在工作上擅長優化工作流程，對於細節也很專注，通常會和同事一起研究如何優化，也能促進同事之間的團結，所以對於平行、開放的產業或是公司很嚮往，期待找到能發揮最大潛能的工作。
              </p>
            </Td>
          </Tr>
          <Tr>
            <Th fontSize="md" minW="150px">
              學歷
            </Th>
            <Td>中國醫藥大學 醫學檢驗暨生物技術學系 學士</Td>
          </Tr>
          <Tr>
            <Th fontSize="md" minW="150px">
              經歷
            </Th>
            <Td>
              <ol>
                <li>臨床醫檢師</li>
                <li>動保處研究助理</li>
                <li>台大動科研究助理</li>
                <li>獨木舟教練</li>
                <li>游泳、救生教練</li>
              </ol>
            </Td>
          </Tr>
          <Tr>
            <Th fontSize="md" minW="150px">
              語言
            </Th>
            <Td>
              <ul>
                <li>中文：精通</li>
                <li>英文：日常、旅行用語</li>
              </ul>
            </Td>
          </Tr>
          <Tr>
            <Th fontSize="md" minW="150px">
              程式語言
            </Th>
            <Td>
              <Flex direction="row" spacing="5px">
                <Image maxW="50px" src="/images/html.svg" alt="HTML5" />
                <Image maxW="50px" src="/images/css.svg" alt="CSS3" />
                <Image maxW="50px" src="/images/python.svg" alt="Python" />
                <Image maxW="50px" src="/images/JS.svg" alt="JS" />
                <Image maxW="50px" src="/images/react.svg" alt="react" />
              </Flex>
            </Td>
          </Tr>
          <Tr>
            <Th fontSize="md" minW="150px">
              開發和學習經驗
            </Th>
            <Td>
              <ul>
                <li>
                  <a href="https://lenzolu.netlify.app/">靜態網站：</a>
                  個人簡介頁面、台灣經濟發展歷史網站、夏威夷旅遊租借網站，從構想、使用Figma畫出網站架構、使用者介面UI/UX設計、HTML做出基本網頁架構、CSS將網頁前端美化以及提升以及提使用外觀。
                </li>
                <li>
                  前後端分離：前端使用 React ，製作需要的 Components，並且使用 Redux 追蹤；後端 Server 連結
                  MongoDB，使用 vercel 部署網站。
                </li>
                <li>
                ccClub Python Line Bot Uniqlo 特價通知專案製作
                </li>
                <li>
                  CS50 學習中
                </li>
              </ul>
            </Td>
          </Tr>
        </Table>

        <Image
          borderRadius="10px"
          src="/images/about.jpg"
          maxW="30vw"
          maxH="70vh"
          alt="Cola with Me"
          objectFit="cover"
          flex="1"
        />
      </Stack>
    </Box>
  );
};

export default AboutScreen;

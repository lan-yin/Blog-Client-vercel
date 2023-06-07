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
                大學就讀醫學檢驗暨生物技術學系，工作經歷6-7年，對生命抱有熱情和好奇心，因此在工作之餘也嘗試很多其他活動，偶然一次機會接觸到程式語言，打開我對電腦使用的認知，原以為程式語言深不可測，但經過學習之後，普通人也能夠產出很多有趣的小專案。
              </p>
              <p>
                一開始沈浸在寫 code 完成小遊戲或是和電腦溝通的過程，下班時候當興趣培養，漸漸的在學習程式語言的過程中，發現培養這個興趣，也是一個自我探索、翻轉大腦的過程，從原本醫護人員嚴謹的 SOP
                大腦（不能出錯），到在一個框架下，可以隨機應變（Debug）和創造的思考模式，讓我覺得很有趣，加上 IT
                產業日新月異，需要不斷學習的特色，很符合我的個性，決定給自己一個機會嘗試（擺脫醫檢執照的束縛？）新的職涯可能。
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
                <li>動保處研究助理</li>
                <li>臨床醫檢師</li>
                <li>台大動科研究助理</li>
                <li>臨床醫檢師</li>
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

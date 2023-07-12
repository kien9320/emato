<script>
export default {
    name: 'ArticleDetailPage',
    data() {
        return {
            slideList: ['article-img-1', 'article-img-2', 'article-img-3'],
            content: `<h6>Portrait of smiling man sitting in a cafe bar with his o</h6>
            <p>Ngay từ khi thế giới Dota 2 chỉ mới là một ý tưởng được nhen nhóm lên thì chúng đã chứa đựng những người đồng hành kỳ lạ nhất tò mò về tiểu sử các Hero trong Dota 2. Cụ thể trong đó chính là cốt truyện xoay quanh một khối cầu phát sáng rực rỡ ví như những viên pha lê lộng lẫy tỏa sáng trong đêm tối mang tên là Mad Moon (Trăng Điên). Viên ngọc tuy nhỏ bé nhưng lại tỏa ra vầng hào quang chói sáng giống như ánh Mặt Trời sáng rực vào ban ngày. </p>
            <h6>Portrait of smiling man sitting in a cafe bar with his o</h6>
            <p>Viên đá di động Mad Moon chính là nơi ngục tù giam cầm cùng lúc 2 trí tuệ cổ đại khiến chúng bị đày trong ải thời gian vĩnh cửu từ xa xưa mà chưa tìm được cách thoát khỏi. Khi đấng sáng tạo nguyên thủy tối cao – tướng Primodials – quá mệt mỏi khi phải liên tục giải quyết những cuộc đối đầu diễn ra không ngừng nghỉ trên cả hai phe- nơi làm nên tiểu sử các Hero trong Dota 2 trong mỗi ngày trôi qua.</p>
            <h6>Portrait of smiling man sitting in a cafe bar with his o</h6>
            <p>Người đã đưa ra một hình thức trừng phạt dành cho những Ancients này đó là chúng sẽ bị trói với nhau cùng với một viên đá và phải lang thang trong vô định trong không gian…  Chúng cứ thể lạc trôi đi và vô tình lạc vào khung cảnh thế giới của chúng ta.</p>
            <h6>Portrait of smiling man sitting in a cafe bar with his o</h6>
            <p>Sau khi trải qua nhiều giai đoạn thăng trầm của lịch sử,  chứng kiến các nhiều nền văn minh sơ khai mọc lên và sụp đổ dưới ánh hào quang của nó. Dưới sức ép mạnh mẽ của quỹ đạo cùng lực thủy triều dữ dội đã khiến cho 2 cư dân của Mad Moon tìm thấy được cơ hội thoát ra và làm nên tiểu sử các Hero trong Dota 2 .</p>
            <h6>Portrait of smiling man sitting in a cafe bar with his o</h6>
            <p>Mặc dù, ý chí ban đầu của chúng khá yếu ớt nhưng vì mong muốn giải thoát và khát khao tự do chúng đã tìm mọi cách để có thể thoát ra từ những vết nứt đến khe nhỏ. Theo thời gian, các vết rạn nứt dần dần gãy to hơn, lan tỏa và phát ra nhóm những năng lượng phát sáng lung linh kỳ lạ.</p>`,

        };
    },
};
</script>

<template>
    <div class="article-detail-page">
        <b-container class="pb-5 detail-container">
            <div class="article-detail-left">
                <div class="px-4">
                    <div class="article-detail-bg">
                        <img src="@/assets/Article/article-img.jpg" alt="">
                    </div>
                    <div class="article-detail-title mt-4">
                        {{ $route.params.title }}
                    </div>
                    <div class="article-detail-date my-3">

                        <p>Ngày đăng: </p> <span class="ml-2">08 July 2022</span>
                    </div>
                    <div class="article-detail-content" v-html="content"></div>
                </div>
            </div>
        </b-container>
    </div>
</template>

<style lang="scss">
.article-detail-page {
    .detail-container {
        .article-detail-left {
            .article-detail-bg {
                width: 100%;
                height: 50vh;
                max-height: 600px;
                overflow: hidden;
                display: inline-block;
                cursor: pointer;

                img {
                    height: 100%;
                    width: 100%;
                    object-fit: scale-down;
                    -webkit-transition: all 1s;
                    -moz-transition: all 1s;
                    -o-transition: all 1s;
                    transition: all 1s;
                }

                &:hover {
                    img {
                        -ms-transform: scale(1.2);
                        -moz-transform: scale(1.2);
                        -webkit-transform: scale(1.2);
                        -o-transform: scale(1.2);
                        transform: scale(1.2);
                    }
                }
            }


            .article-detail-title {
                font-family: 'Oxanium';
                font-style: normal;
                font-weight: 700;
                font-size: 32px;
                line-height: 40px;

                color: #000000;
            }

            .article-detail-date {
                display: flex;
                align-items: center;

                p {
                    font-family: 'Open Sans';
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 24px;
                }

                span {
                    font-family: 'Open Sans';
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 24px;

                    color: #e4a101;

                    display: inline-block;
                    margin-left: 5px;
                }
            }

            .article-detail-content {
                h6 {
                    font-weight: bold;
                }
            }
        }


    }

}
</style>

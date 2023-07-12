<script>
export default {
    data() {
        return {
            categoryList: [
                'Tin công nghệ',
                'Tin tức mới',
                'Tin chiến sự',
                'Tin thể thao',
                'Tin học sinh - sinh viên',
                'Tin văn học',
                'Tin crypto',
            ],
            searchValue: '',
        };
    },
};
</script>

<template>
    <b-container>
        <div class="main-article-row">
            <div class="article-detail-right">
                <div class="frame-search d-none d-lg-flex mb-4">
                    <b-form-input v-model="searchValue" placeholder="Tìm kiếm tin tức" />
                    <div class="btn-search">
                        <b-icon class="m-auto" icon="search"></b-icon>
                    </div>
                </div>
                <div class="frame-category">
                    <h3>Danh mục</h3>
                    <ul class="category-item">
                        <li v-for="(item, index) in categoryList" :key="index">{{ item }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </b-container>

</template>

<style lang="scss" scoped>
.frame-search {
    background: #f4f4f4;
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;

    color: #000000;

    // display: flex;
    border-radius: 3px;

    b-form-input &::placeholder {
        padding-left: 25px;
        padding-right: 55px;
        background: #f4f4f4;
        border-radius: 3px;
        border: 1px solid #e6e6e6;
        width: 100%;
        height: 45px;
        line-height: 45px;
        font-size: 12px;
    }


    input {
        background: none;
        border: none;
    }

    .btn-search {
        cursor: pointer;
        background: transparent;
        width: 56px;
        border-radius: 3px;
        display: flex;

        img {
            margin: auto;
        }

    }
}

.article-detail-right {
    background: #fff;
    padding: 15px 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


    .frame-category {
        h3 {
            font-family: 'Open Sans';
            padding-bottom: 6px;
            border-bottom: 1px solid #ebebeb;
            position: relative;
            font-size: 20px;
            font-weight: 700;

            &::after {
                position: absolute;
                content: "";
                bottom: -1px;
                left: 0;
                height: 2px;
                width: 50px;
                background: #43c7ff;
            }
        }

        .category-item {
            padding: 0;

            li {
                border-bottom: 1px solid #e6e6e6;
                list-style-type: none;
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 38px;
                color: #041f48;
                cursor: pointer;
            }
        }
    }
}
</style>

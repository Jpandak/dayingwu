import { defineStore } from 'pinia'

export const useParrotDetails = defineStore('parrotDetails', {
    state: () => ({
        parrotDetails: {
            //  "grey-parrot": {
            //    id: 1,
            //    name: "灰鹦鹉",
            //    description:
            //      "非洲灰鹦鹉以其超凡的智慧和模仿人类语言的能力而闻名。它们不仅能够学习说话，还能理解简单的概念和进行基础的数学运算。",
            //    image: "https://images.pexels.com/photos/9365605/pexels-photo-9365605.jpeg",
            //    characteristics: [
            //      { title: "体型", content: "身长约30-35厘米" },
            //      { title: "寿命", content: "平均40-50年" },
            //      { title: "智商", content: "相当于5-6岁人类儿童" },
            //      { title: "语言能力", content: "可以学习上千个单词" },
            //    ],
            //    careTips: [
            //      "需要大型鸟笼，建议尺寸至少60×60×90厘米",
            //      "每天需要12-14小时的睡眠时间",
            //      "饮食应包含优质鹦鹉粮、新鲜蔬果和适量坚果",
            //      "需要大量互动和智力训练",
            //      "定期修剪指甲和翅膀",
            //    ],
            //  },
            //  macaw: {
            //    id: 2,
            //    name: "金刚鹦鹉",
            //    description:
            //      "金刚鹦鹉是体型最大的鹦鹉品种之一，以其艳丽的羽毛和聪明的性格著称。它们性格活泼，喜欢互动，是非常受欢迎的宠物鸟类。",
            //    image:
            //      "https://images.pexels.com/photos/12474956/pexels-photo-12474956.jpeg",
            //    characteristics: [
            //      { title: "体型", content: "身长可达80-95厘米" },
            //      { title: "寿命", content: "平均50-60年" },
            //      { title: "性格", content: "活泼好动，喜欢玩耍" },
            //      { title: "叫声", content: "声音响亮，适合独栋房屋饲养" },
            //    ],
            //    careTips: [
            //      "需要特大型鸟笼，建议尺寸至少90×90×120厘米",
            //      "每天需要充足的运动和飞行时间",
            //      "提供各种玩具和攀爬设施",
            //      "饮食需要多样化，包括坚果、水果、蔬菜等",
            //      "需要定期洗澡和羽毛护理",
            //    ],
            //  },
            //  budgie: {
            //    id: 3,
            //    name: "虎皮鹦鹉",
            //    description:
            //      "虎皮鹦鹉体型小巧，性格温和，是最受欢迎的入门级宠物鹦鹉。它们易于饲养，能学说简单的话，适合新手饲养者。",
            //    image:
            //      "https://images.pexels.com/photos/14847844/pexels-photo-14847844.jpeg",
            //    characteristics: [
            //      { title: "体型", content: "身长约18-20厘米" },
            //      { title: "寿命", content: "平均8-10年" },
            //      { title: "性格", content: "温顺友好，容易驯养" },
            //      { title: "语言能力", content: "可以学习简单的词语" },
            //    ],
            //    careTips: [
            //      "适合小型鸟笼，建议尺寸至少45×45×45厘米",
            //      "喜欢成对饲养",
            //      "提供小型玩具和磨喙器",
            //      "每天需要新鲜的食物和清水",
            //      "保持环境温暖，避免寒风",
            //    ],
            //  },
            //  cockatoo: {
            //    id: 4,
            //    name: "葵花凤头鹦鹉",
            //    description:
            //      "葵花凤头鹦鹉以其优雅的白色羽毛和醒目的黄色冠羽而闻名。它们非常聪明，性格温顺亲人，但需要大量的关注和互动。这种鹦鹉以其出色的模仿能力和丰富的情感表达而受到爱好者的喜爱。",
            //    image: "https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg",
            //    characteristics: [
            //      { title: "体型", content: "身长约45-50厘米" },
            //      { title: "寿命", content: "平均40-60年" },
            //      { title: "性格", content: "感情丰富，需要大量关注" },
            //      { title: "特点", content: "标志性的黄色冠羽，会跳舞" },
            //    ],
            //    careTips: [
            //      "需要大型鸟笼，建议尺寸至少80×80×120厘米",
            //      "每天需要3-4小时的笼外活动时间",
            //      "需要定期修剪冠羽和指甲",
            //      "饮食应包含各种坚果、水果和蔬菜",
            //      "对环境噪音敏感，需要安静的休息环境",
            //    ],
            //  },
            //  lovebird: {
            //    id: 5,
            //    name: "情侣鹦鹉",
            //    description:
            //      "情侣鹦鹉因其亲密的伴侣关系和恩爱的行为而得名。它们体型小巧，羽毛色彩艳丽，性格活泼可爱。这种鹦鹉最好成对饲养，它们会展现出令人惊叹的忠诚和感情。",
            //    image: "https://images.pexels.com/photos/5998628/pexels-photo-5998628.jpeg",
            //    characteristics: [
            //      { title: "体型", content: "身长约13-17厘米" },
            //      { title: "寿命", content: "平均10-15年" },
            //      { title: "性格", content: "活泼好动，重感情" },
            //      { title: "特点", content: "适合成对饲养，色彩鲜艳" },
            //    ],
            //    careTips: [
            //      "建议成对饲养，笼子尺寸至少45×45×45厘米",
            //      "提供多样化的玩具和攀爬设施",
            //      "每天需要充足的运动时间",
            //      "定期补充维生素和矿物质",
            //      "保持环境清洁和适宜温度",
            //    ],
            //  },
            //  conure: {
            //    id: 6,
            //    name: "太阳锥尾鹦鹉",
            //    description:
            //      "太阳锥尾鹦鹉以其明亮的橙黄色羽毛和活泼的性格而闻名。它们是很好的宠物鸟，既聪明又充满活力，能够学习简单的词语和技巧。这种鹦鹉特别适合喜欢互动的饲养者。",
            //    image: "https://images.pexels.com/photos/2662434/pexels-photo-2662434.jpeg",
            //    characteristics: [
            //      { title: "体型", content: "身长约30厘米" },
            //      { title: "寿命", content: "平均20-25年" },
            //      { title: "性格", content: "活泼开朗，喜欢玩耍" },
            //      { title: "特点", content: "叫声较响，适合互动" },
            //    ],
            //    careTips: [
            //      "需要中型鸟笼，建议尺寸至少60×60×75厘米",
            //      "提供丰富的玩具和攀爬器具",
            //      "每天需要规律的运动和训练时间",
            //      "饮食要均衡，包括专用饲料和新鲜食物",
            //      "需要适当的社交和互动",
            //    ],
            //  },
            lovebird: {
                id: 1,
                name: "牡丹鹦鹉",
                description: "体型娇小，色彩缤纷，以其亲密的伴侣关系而闻名。",
                image: "https://img.win3000.com/m00/89/27/2c48d340036686363c762c47fea197bd.jpg",
                characteristics: [{
                        title: "体型",
                        content: "身长约13-17厘米",
                    },
                    {
                        title: "寿命",
                        content: "平均10-15年",
                    },
                    {
                        title: "性格",
                        content: "活泼好动，对伴侣忠诚度高",
                    },
                    {
                        title: "语言能力",
                        content: "语言学习能力较弱，但能通过叫声交流",
                    },
                ],
                careTips: [
                    "需要提供适宜大小的鸟笼，建议尺寸至少30×30×40厘米",
                    "饮食以小米、稗子等谷物为主，搭配少量蔬果",
                    "给予足够的玩具，满足其好动的天性",
                    "注意保持鸟笼清洁，预防疾病",
                ],
            },
            cockatiel: {
                id: 2,
                name: "玄凤鹦鹉",
                description: "标志性羽冠与腮红斑点，性格温顺亲人，是小型鹦鹉中的颜值担当。",
                image: "https://n.sinaimg.cn/sinakd20200913ac/607/w640h767/20200913/e164-iyywcta1628440.jpg",
                characteristics: [{
                        title: "体型",
                        content: "身长约30-34厘米",
                    },
                    {
                        title: "寿命",
                        content: "平均15-20年",
                    },
                    {
                        title: "性格",
                        content: "温和友善，容易与人亲近",
                    },
                    {
                        title: "语言能力",
                        content: "有一定的语言学习能力，能模仿简单词汇",
                    },
                ],
                careTips: [
                    "准备宽敞的鸟笼，建议尺寸至少40×40×60厘米",
                    "提供多样化的食物，包括鹦鹉粮、谷物、蔬果等",
                    "每天安排互动时间，增进感情",
                    "定期检查身体，预防羽虱等寄生虫",
                ],
            },
            "sun-conure": {
                id: 3,
                name: "小太阳鹦鹉",
                description: "橙黄渐变羽毛如落日，精力旺盛互动性强，擅长学习小技巧。",
                image: "https://tse2-mm.cn.bing.net/th/id/OIP-C.YmFtrPPuXQ0YGY7uvyDm4AAAAA?rs=1&pid=ImgDetMain",
                characteristics: [{
                        title: "体型",
                        content: "身长约24-26厘米",
                    },
                    {
                        title: "寿命",
                        content: "平均10-15年",
                    },
                    {
                        title: "性格",
                        content: "活泼外向，好奇心强",
                    },
                    {
                        title: "技能",
                        content: "能学会一些简单的动作和技巧",
                    },
                ],
                careTips: [
                    "提供较大的活动空间，鸟笼建议尺寸至少50×50×70厘米",
                    "饮食包括鹦鹉粮、水果、坚果和少量蔬菜",
                    "给予足够的运动和玩耍时间",
                    "注意补钙，防止骨骼疾病",
                ],
            },
            "quaker-parrot": {
                id: 4,
                name: "和尚鹦鹉",
                description: "灰绿色羽毛配呆萌眼神，筑巢能力强，语言模仿天赋出众。",
                image: "https://tse1-mm.cn.bing.net/th/id/OIP-C.4jKRettsIFgVSaiDNvSnUAAAAA?rs=1&pid=ImgDetMain",
                characteristics: [{
                        title: "体型",
                        content: "身长约26-30厘米",
                    },
                    {
                        title: "寿命",
                        content: "平均15-20年",
                    },
                    {
                        title: "能力",
                        content: "善于模仿人类语言，能构建复杂巢穴",
                    },
                    {
                        title: "性格",
                        content: "聪明伶俐，有一定的领地意识",
                    },
                ],
                careTips: [
                    "需要坚固且空间较大的鸟笼，建议尺寸至少60×60×80厘米",
                    "提供树枝等材料供其筑巢",
                    "饮食多样化，包含种子、蔬果、谷物等",
                    "进行适当的社交训练，避免过度攻击行为",
                ],
            },
            "grey-parrot": {
                id: 5,
                name: "灰鹦鹉",
                description: "非洲灰鹦鹉以其超凡的智慧和模仿人类语言的能力而闻名。它们不仅能够学习说话，还能理解简单的概念和进行基础的数学运算。",
                image: "https://images.pexels.com/photos/9365605/pexels-photo-9365605.jpeg",
                characteristics: [{
                        title: "体型",
                        content: "身长约30-35厘米",
                    },
                    {
                        title: "寿命",
                        content: "平均40-50年",
                    },
                    {
                        title: "智商",
                        content: "相当于5-6岁人类儿童",
                    },
                    {
                        title: "语言能力",
                        content: "可以学习上千个单词",
                    },
                ],
                careTips: [
                    "需要大型鸟笼，建议尺寸至少60×60×90厘米",
                    "每天需要12-14小时的睡眠时间",
                    "饮食应包含优质鹦鹉粮、新鲜蔬果和适量坚果",
                    "需要大量互动和智力训练",
                    "定期修剪指甲和翅膀",
                ],
            },
            macaw: {
                id: 6,
                name: "金刚鹦鹉",
                description: "金刚鹦鹉是体型最大的鹦鹉品种之一，以其艳丽的羽毛和聪明的性格著称。它们性格活泼，喜欢互动，是非常受欢迎的宠物鸟类。",
                image: "https://images.pexels.com/photos/12474956/pexels-photo-12474956.jpeg",
                characteristics: [{
                        title: "体型",
                        content: "身长可达80-95厘米",
                    },
                    {
                        title: "寿命",
                        content: "平均50-60年",
                    },
                    {
                        title: "性格",
                        content: "活泼好动，喜欢玩耍",
                    },
                    {
                        title: "叫声",
                        content: "声音响亮，适合独栋房屋饲养",
                    },
                ],
                careTips: [
                    "需要特大型鸟笼，建议尺寸至少90×90×120厘米",
                    "每天需要充足的运动和飞行时间",
                    "提供各种玩具和攀爬设施",
                    "饮食需要多样化，包括坚果、水果、蔬菜等",
                    "需要定期洗澡和羽毛护理",
                ],
            },
            budgie: {
                id: 7,
                name: "虎皮鹦鹉",
                description: "小巧可爱，适合新手饲养的入门级鹦鹉。",
                image: "https://cdn.pixabay.com/photo/2017/09/23/18/59/budgerigar-2779842_640.jpg",
                characteristics: [{
                        title: "体型",
                        content: "身长约10-20厘米",
                    },
                    {
                        title: "寿命",
                        content: "平均7-10年",
                    },
                    {
                        title: "性格",
                        content: "活泼好动，适应能力强",
                    },
                    {
                        title: "饲养难度",
                        content: "饲养难度较低",
                    },
                ],
                careTips: [
                    "准备小型鸟笼，建议尺寸至少25×25×35厘米",
                    "饮食以小米、稗子等为主，搭配少量蔬果",
                    "保持鸟笼温暖，避免冷风直吹",
                    "定期更换饮水和食物，保持清洁",
                ],
            },
            cockatoo: {
                id: 8,
                name: "葵花凤头鹦鹉",
                description: "优雅的白色羽毛和醒目的冠羽，性格亲人，非常适合作为宠物。",
                image: "https://cdn.pixabay.com/photo/2023/05/11/03/34/white-cockatoo-7985434_1280.jpg",
                characteristics: [{
                        title: "体型",
                        content: "身长约40-50厘米",
                    },
                    {
                        title: "寿命",
                        content: "平均40-60年",
                    },
                    {
                        title: "性格",
                        content: "温顺亲人，喜欢被关注",
                    },
                    {
                        title: "羽冠",
                        content: "具有可伸缩的艳丽羽冠",
                    },
                ],
                careTips: [
                    "需要大型鸟笼，建议尺寸至少80×80×120厘米",
                    "提供丰富的玩具和互动，满足其情感需求",
                    "饮食包括鹦鹉粮、坚果、水果和蔬菜",
                    "定期洗澡，保持羽毛清洁",
                ],
            },
            conure: {
                id: 9,
                name: "金太阳鹦鹉",
                description: "活泼开朗，羽毛鲜艳，是很受欢迎的中型鹦鹉。",
                image: "https://n.sinaimg.cn/sinacn/w640h388/20180107/4274-fyqincv0220855.jpg",
                characteristics: [{
                        title: "体型",
                        content: "身长约30-32厘米",
                    },
                    {
                        title: "寿命",
                        content: "平均15-20年",
                    },
                    {
                        title: "性格",
                        content: "热情活泼，充满活力",
                    },
                    {
                        title: "羽毛",
                        content: "羽毛色彩鲜艳夺目",
                    },
                ],
                careTips: [
                    "提供较大空间的鸟笼，建议尺寸至少60×60×90厘米",
                    "饮食多样化，包含种子、水果、蔬菜和坚果",
                    "每天安排户外活动时间",
                    "定期驱虫，预防疾病",
                ],
            },
            lory: {
                id: 10,
                name: "吸蜜鹦鹉",
                description: "刷状舌尖适应花蜜饮食，羽毛如彩虹般绚丽，鸣叫清脆悦耳。",
                image: "https://p1.ssl.qhimg.com/t0183d540e5fea9e255.jpg",
                characteristics: [{
                        title: "体型",
                        content: "身长约25-30厘米",
                    },
                    {
                        title: "寿命",
                        content: "平均15-25年",
                    },
                    {
                        title: "饮食",
                        content: "以花蜜、花粉和水果为主食",
                    },
                    {
                        title: "羽毛",
                        content: "羽毛色彩丰富多样",
                    },
                ],
                careTips: [
                    "需要专门的吸蜜鹦鹉笼，建议尺寸至少50×50×70厘米",
                    "提供新鲜的花蜜、吸蜜鹦鹉专用饲料和水果",
                    "保持鸟笼和食具的清洁，防止细菌滋生",
                    "避免与其他食谷鸟类混养",
                ],
            },
        }
    }),
})
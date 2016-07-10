import React from 'react'
import {Link} from 'react-router'

export default class Navs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{
                name    : "web前端研发工程师",
                location: "北京",
                salary  : "年薪18-25万",
                desc    : React.createElement("div", null, React.createElement("h4", null, "岗位职责："), React.createElement("ul", null, React.createElement("li", null, "负责智课各产品web前端研发；"), React.createElement("li", null, "产品易用性改进、代码效率优化；"), React.createElement("li", null, "web前沿技术研究和新技术调研；")), React.createElement("h4", null, "岗位需求："), React.createElement("ul", null, React.createElement("li", null, "熟练使用html/css/javascript等开发技术；"), React.createElement("li", null, "熟练使用gulp/grunt/webpack等开发工具；"), React.createElement("li", null, "具有良好的沟通能力和团队协作精神；"), React.createElement("li", null, "优秀的分析问题和解决问题的能力；"), React.createElement("li", null, "热爱互联网，对互联网产品和技术有浓厚的兴趣，热衷于追求技术极致与创新；")), React.createElement("h4", null, "加分项："), React.createElement("ul", null, React.createElement("li", null, "极客！！！"), React.createElement("li", null, "不愿意兼容IE8；"), React.createElement("li", null, "崇尚响应式设计；"), React.createElement("li", null, "有较好的审美，甚至是独立制作UI的能力；"), React.createElement("li", null, "熟悉react/angular等框架，理解其编程思维；"), React.createElement("li", null, "有后端开发经验；"), React.createElement("li", null, "搞过竞赛，OI/ACM；")))
            }, {
                name    : "后端研发工程师",
                location: "北京",
                salary  : "年薪18-25万",
                desc    : React.createElement("div", null, React.createElement("h4", null, "岗位职责："), React.createElement("ul", null, React.createElement("li", null, "负责智课后端产品功能和架构研发；"), React.createElement("li", null, "负责自动化运维/管理系统研发；"), React.createElement("li", null, "前瞻技术的跟踪调研和产品创新；")), React.createElement("h4", null, "岗位需求："), React.createElement("ul", null, React.createElement("li", null, "熟练掌握至少一门编程语言，C/C++、Node、Python、PHP、Java等；"), React.createElement("li", null, "熟练掌握计算机基本原理、常用数据结构和算法；"), React.createElement("li", null, "具有良好的沟通能力和团队合作精神；"), React.createElement("li", null, "优秀的分析问题和解决问题的能力；"), React.createElement("li", null, "热爱互联网，对互联网产品和技术有浓厚的兴趣，热衷于追求技术极致与创新；")), React.createElement("h4", null, "加分项："), React.createElement("ul", null, React.createElement("li", null, "极客！！！"), React.createElement("li", null, "赞同不写单元测试的项目都是耍流氓；"), React.createElement("li", null, "有一定项目经验，熟悉后端开发流程；"), React.createElement("li", null, "有前端开发经验；"), React.createElement("li", null, "搞过竞赛，OI/ACM；")))
            }, {
                name    : "移动端研发工程师",
                location: "北京",
                salary  : "年薪18-25万",
                desc    : React.createElement("div", null, React.createElement("h4", null, "岗位职责："), React.createElement("ul", null, React.createElement("li", null, "负责智课移动app的研发和架构；"), React.createElement("li", null, "学习和研究移动客户端新技术；")), React.createElement("h4", null, "岗位需求："), React.createElement("ul", null, React.createElement("li", null, "熟练掌握至少一门移动开发技术，Objective C/Swift/Java等；"), React.createElement("li", null, "熟练掌握计算机基本原理、常用数据结构和算法；"), React.createElement("li", null, "具有良好的沟通能力和团队合作精神；"), React.createElement("li", null, "优秀的分析问题和解决问题的能力；"), React.createElement("li", null, "热爱互联网，对互联网产品和技术有浓厚的兴趣，热衷于追求技术极致与创新；")), React.createElement("h4", null, "加分项："), React.createElement("ul", null, React.createElement("li", null, "极客！！！"), React.createElement("li", null, "有较好的审美，甚至是独立制作UI的能力；"), React.createElement("li", null, "有独立app开发经验、上线产品；"), React.createElement("li", null, "有后端开发经验；"), React.createElement("li", null, "搞过竞赛，OI/ACM；")))
            }, {
                name    : "自然语言处理工程师",
                location: "北京",
                salary  : "年薪18-25万",
                desc    : React.createElement("div", null, React.createElement("h4", null, "岗位职责："), React.createElement("ul", null, React.createElement("li", null, "基于智课网用户行为和海量标注数据进行自然语言处理基础研究和配合产品开发；")), React.createElement("h4", null, "岗位需求："), React.createElement("ul", null, React.createElement("li", null, "精通Java/C/C++编程；"), React.createElement("li", null, "学习过自然语言处理和机器学习的基础理论和方法，了解过某方面核心算法；"), React.createElement("li", null, "对解决具有挑战性问题充满激情；"), React.createElement("li", null, "对于语言学有一定了解；")), React.createElement("h4", null, "加分项："), React.createElement("ul", null, React.createElement("li", null, "有NLP相关项目经验；"), React.createElement("li", null, "从事过深度问答项目问题理解、语义分析、答案推理计算、句法分析、命名实体识别、知识图谱任一方向的研究工作；"), React.createElement("li", null, "具有深度神经网络DNN理论基础及实战经验者；")))
            }, {
                name    : "语音识别评测工程师",
                location: "北京",
                salary  : "年薪18-25万",
                desc    : React.createElement("div", null, React.createElement("h4", null, "岗位职责："), React.createElement("ul", null, React.createElement("li", null, "负责语音识别和语音评测相关算法的优化和研究；")), React.createElement("h4", null, "岗位需求："), React.createElement("ul", null, React.createElement("li", null, "良好的编程基础，熟悉一种或者几种编程语言；"), React.createElement("li", null, "了解语音识别的各模块关键技术，从事过语音识别声学建模技术研究，有解码器相关理论基础及实践经验；"), React.createElement("li", null, "熟悉语音识别/模式识别/神经网络/信号处理等相关算法；")), React.createElement("h4", null, "加分项："), React.createElement("ul", null, React.createElement("li", null, "有开源语音识别工具的使用和优化经验；"), React.createElement("li", null, "从事过语音识别（ASR）或语音评测相关算法的优化和研究；"), React.createElement("li", null, "较强的科研能力或者工程能力，能带领团队对语音识别和语音评测相关算法的效能进行优化和研究；"), React.createElement("li", null, "从事过解码器优化等相关工作；"), React.createElement("li", null, "有海量数据声学建模、语音识别抗噪技术经验；")))
            }]
        };
    }

    render() {

        return (
            <nav className="nav">
                {this.state.list.map((unit, index) => {
                    return (
                        <div className="nav-unit" key={index}>{unit.name}</div>
                    )
                })}
            </nav>
        )
    }
}

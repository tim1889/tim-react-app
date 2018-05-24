import React, { Component } from 'react';
import Pagination from './Pagination.jsx';
require('./Index.css');

export default class Index extends Component {
    constructor() {
        super();
        this.state = {
            pageInputNum: '',
            pageNo: 1,
            pageData: {},
        };
    }

    componentDidMount() {
        this.paging(this.props.data);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.data !== nextProps.data) {
            this.paging(nextProps.data);
        }
    }

    paging = (data) => {
        const pageSize = this.props.data.pageSize || (this.props.mini ? 10 : 20);

        const maxPage = Math.ceil(data.count / pageSize);

        let pages = [],
            pageNo;

        if (data.pageNo !== this.state.pageNo) {
            pageNo = parseInt(data.pageNo, 10);
        } else {
            pageNo = parseInt(this.state.pageNo, 10);
        }


        if (maxPage < 5) {
            for (let i = 1; i < maxPage + 1; i++) {
                let isActive = false;
                if (i == pageNo) {
                    isActive = true;
                }
                pages[i] = {
                    title: i + '',
                    link: i + '',
                    active: isActive,
                };
            }
        } else if (!maxPage) {
            pages = [];
        } else {
            if (pageNo < 3) {
                for (let i = 0; i < 5; i++) {
                    let isActive = false;
                    if (i == pageNo - 1) {
                        isActive = true;
                    }
                    pages[i] = {
                        title: (i + 1) + '',
                        link: (i + 1) + '',
                        active: isActive,
                    };
                }
            } else if (pageNo > (maxPage - 2)) {
                for (let i = 0; i < 5; i++) {
                    let isActive = false;
                    if (i == 4 - (maxPage - pageNo)) {
                        isActive = true;
                    }
                    pages[i] = {
                        title: (maxPage - 4 + i) + '',
                        link: (maxPage - 4 + i) + '',
                        active: isActive,
                    };
                }
            } else {
                pages = [{
                    title: (pageNo - 2) + '',
                    link: (pageNo - 2) + '',
                }, {
                    title: (pageNo - 1) + '',
                    link: (pageNo - 1) + '',
                }, {
                    title: pageNo + '',
                    link: pageNo + '',
                    active: true,
                }, {
                    title: (pageNo + 1) + '',
                    link: (pageNo + 1) + '',
                }, {
                    title: (pageNo + 2) + '',
                    link: (pageNo + 2) + '',
                }];
            }
        }
        this.setState({
            pageData: {
                prevTitle: this.props.mini ? '<' : '上一页',
                prevLink: (pageNo - 1) + '',
                nextTitle: this.props.mini ? '>' : '下一页',
                nextLink: (pageNo + 1) + '',
                firstTitle: '首页',
                firstLink: '1',
                lastTitle: '尾页',
                lastLink: maxPage + '',
                pages: pages,
            },
        });
    }

    render() {
        const { pageInputNum } = this.state;

        const pageSize = this.props.data.pageSize || (this.props.mini ? 10 : 20);

        let maxPage = Math.ceil(this.props.data.count / pageSize);

        if (!maxPage) {
            maxPage = 0;
        }

        return (
            <div style={{ 'visibility': maxPage <= 1 ? 'hidden' : 'visible' }}>
                <div className={this.props.mini ? 'page-group-mini' : 'page-group'}>
                    <Pagination
                        data={this.state.pageData}
                        onSelect={(currentPage) => {
                            const max = Math.ceil(this.props.data.count / pageSize);
                            this.paging(this.props.data);

                            if (currentPage >= max) {
                                this.props.callbackPaging(max);
                                this.setState({
                                    pageNo: max,
                                    pageInputNum: '',
                                });
                            } else if (currentPage <= 1) {
                                this.props.callbackPaging(1);
                                this.setState({
                                    pageNo: 1,
                                    pageInputNum: '',
                                });
                            } else {
                                this.props.callbackPaging(currentPage);
                                this.setState({
                                    pageNo: currentPage,
                                    pageInputNum: '',
                                });
                            }
                        }
                        } />
                    <span>跳到&nbsp;</span>
                    <input type="text"
                        value={pageInputNum}
                        onChange={(e) => {
                            const target = e.target || e.srElemnt;
                            const str = target.value;
                            if (str == str.replace(/\D/g, '')) {
                                this.setState({
                                    pageInputNum: str
                                });
                            }
                        }} />
                    <span>&nbsp;页 &nbsp;&nbsp;</span>
                    <button
                        onClick={() => {
                            this.paging(this.props.data);
                            const currentPage = this.state.pageInputNum,
                                max = Math.ceil(this.props.data.count / pageSize);
                            if (currentPage >= max) {
                                this.props.callbackPaging(max);
                                this.setState({
                                    pageNo: max,
                                    pageInputNum: '',
                                });
                            } else if (currentPage <= 1) {
                                this.props.callbackPaging(1);
                                this.setState({
                                    pageNo: 1,
                                    pageInputNum: '',
                                });
                            } else {
                                this.props.callbackPaging(currentPage);
                                this.setState({
                                    pageNo: currentPage,
                                    pageInputNum: '',
                                });
                            }
                        }}>确定</button>
                </div>
                <div className="fs-clear-both" />
            </div>
        );
    }
}
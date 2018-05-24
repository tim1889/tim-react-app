import React, { Component } from 'react';

export default class Pagination extends Component {
    render() {
        const { data } = this.props;
        const pages = data.pages ?
            data.pages.map((pdata) => {
                return (
                    <li key={pdata.link}
                        className={pdata.active ? 'fs-active' : null}
                        onClick={() => {
                            this.props.onSelect(pdata.link);
                        }}>
                        {pdata.title}
                    </li>
                );
            }) : null;
        return (
            <ul>
                <li className="fs-pagination-first"
                    onClick={() => {
                        this.props.onSelect(data.firstLink);
                    }}>
                    {data.firstTitle}
                </li>
                <li className="fs-pagination-prev"
                    onClick={() => {
                        this.props.onSelect(data.prevLink);
                    }}>
                    {data.prevTitle}
                </li>
                {pages}
                <li className="fs-pagination-next"
                    onClick={() => {
                        this.props.onSelect(data.nextLink);
                    }}>
                    {data.nextTitle}
                </li>
                <li className="fs-pagination-last"
                    onClick={() => {
                        this.props.onSelect(data.lastLink);
                    }}>
                    {data.lastTitle}
                </li>
                <div className="fs-clear-both" />
            </ul>
        );
    }
}

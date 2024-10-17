"use client";

import React, { useState } from "react";
import {
    LineChartOutlined,
    LogoutOutlined,
    MessageOutlined,
    PieChartOutlined,
    ProductOutlined,
    SettingOutlined,
    TableOutlined,
} from "@ant-design/icons";
import {
    Layout,
    Menu,
    theme,
    Input,
    Select,
    Popover,
    Avatar,
    List,
    Typography,
    Button,
} from "antd";

const { Header, Content, Sider } = Layout;
const { Search } = Input;

const items = [
    {
        key: "dashboard",
        icon: <PieChartOutlined />,
        label: "Home",
    },
    {
        key: "lb",
        icon: <TableOutlined />,
        label: "Leaderboard",
    },
    {
        key: "products",
        icon: <ProductOutlined />,
        label: "Products",
    },
    {
        key: "sales-report",
        icon: <LineChartOutlined />,
        label: "Sales Report",
    },
    {
        key: "messages",
        icon: <MessageOutlined />,
        label: "Messages",
    },
    {
        key: "settings",
        icon: <SettingOutlined />,
        label: "Settings",
    },
    {
        key: "sign-out",
        icon: <LogoutOutlined style={{ color: "red" }} />,
        label: <label style={{ color: "red" }}>Sign Out</label>,
    },
];

export default function Home() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const initialState = {
        data: [],
        error: null,
        loading: false,
    };

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(initialState);

    const popOverContent = (
        <div className="flex flex-col space-y-2">
            <Button>Profile</Button>
            <Button>Teams</Button>
            <Button>...etc</Button>
        </div>
    );
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                theme="light"
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo-vertical" />
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={["dashboard"]}
                    items={items}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "white",
                        justifyContent: "space-evenly",
                        padding: "0 16px",
                    }}
                >
                    <h1 className="text-center font-extrabold text-xl">
                        Dashboard
                    </h1>
                    <Search
                        placeholder="🔍 Search here..."
                        loading={loading}
                        style={{
                            width: 300,
                            margin: "0 16px",
                        }}
                    />
                    <Select
                        defaultValue="en"
                        style={{
                            width: 100,
                        }}
                        options={[
                            {
                                label: `English (🇺🇸)`,
                                value: "en",
                            },
                            {
                                label: "Indonesia",
                                value: "id",
                            },
                        ]}
                    />
                    <div className="horizontal-logo" />
                    <Popover trigger={"hover"} content={popOverContent}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginLeft: "8px",
                            }}
                        >
                            <Avatar
                                shape="square"
                                style={{
                                    height: 50,
                                    width: 50,
                                }}
                            />
                            <div style={{ marginLeft: "4px" }}>
                                {" "}
                                <label
                                    className="font-bold"
                                    style={{
                                        display: "block",
                                        margin: 0,
                                        lineHeight: 1.5,
                                    }}
                                >
                                    Lorem Ipsum
                                </label>
                                <label
                                    className="font-light"
                                    style={{
                                        display: "block",
                                        margin: 0,
                                        lineHeight: 1.5,
                                    }}
                                >
                                    Dolor
                                </label>
                            </div>
                        </div>
                    </Popover>
                </Header>
                <Content style={{ margin: "24px 16px 0" }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        content
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}

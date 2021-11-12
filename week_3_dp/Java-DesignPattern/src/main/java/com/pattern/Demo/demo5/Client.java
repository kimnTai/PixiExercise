package com.pattern.Demo.demo5;

public class Client {
    public static void main(String[] args) {
        // 創建經紀人類
        Agent agent = new Agent();
        // 創建明星物件
        Star star = new Star("Apple");
        agent.setStar(star);
        // 創建粉絲物件
        Fans fans = new Fans("果粉");
        agent.setFans(fans);
        // 創建媒體公司物件
        Company company = new Company("統一企業");
        agent.setCompany(company);
        // 和粉絲見面
        agent.meeting();
        // 和媒體公司，洽談業務
        agent.business();
    }
}

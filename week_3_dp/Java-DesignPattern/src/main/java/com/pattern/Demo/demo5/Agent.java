package com.pattern.Demo.demo5;

public class Agent {
    private Star star;
    private Fans fans;
    private Company company;

    public void setStar(Star star) {
        this.star = star;
    }

    public void setFans(Fans fans) {
        this.fans = fans;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    // 和粉絲見面的方法
    public void meeting() {
        System.out.println(star.getName() + "和紛絲" + fans.getName() + "見面");
    }

    // 和媒體公司洽談的方法
    public void business() {
        System.out.println(star.getName() + "和" + company.getName() + "洽談");
    }
}

class House {
  private basieDepth: number;
  private wallHeight: number;
  private color: string;

  constructor(basieDepth: number, wallHeight: number, color: string) {
    this.basieDepth = basieDepth;
    this.wallHeight = wallHeight;
    this.color = color;
  }

  getBasieDepth(): number {
    return this.basieDepth;
  }

  getWallHeight(): number {
    return this.wallHeight;
  }

  getColor(): string {
    return this.color;
  }
}

abstract class Builder {
  private house: House;

  abstract buildBasie(): number;
  abstract buildWall(): number;
  abstract printColor(): string;

  build(): House {
    this.house = new House(
      this.buildBasie(),
      this.buildWall(),
      this.printColor()
    );
    return this.house;
  }
}

class HouseBuildDirector {
   private builder: Builder;

   setBuilder(builder: Builder){
       this.builder = builder;
   }

   buildHouse(): House{
       return this.builder.build();
   }
}

class CommonBuilder extends Builder {

   buildBasie(): number {
       const depth = 5;
       console.log(`普通房屋地基深度为 ${depth} 米`);
       return depth;
   }
   buildWall(): number {
       const height = 5;
       console.log(`普通房屋墙体高度为 ${height} 米`);
       return height;
   }
   printColor(): string {
       const color = '白色';
       console.log(`普通房屋墙面颜色为 ${color}`);
       return color;
   }

}

/**
 *   建造者模式（Builder Pattern） 又叫生成器模式，是一種對象構建模式。它可以
 * 將復雜對象的建造過程抽像出來（抽像類別），使這個抽象過程的不同實現方法可以
 * 構造出不同表現（屬性）的對象。
 *   建造者模式 是一步一步創建一個複雜的對象，它允許用戶只通過指定複雜對象的類型
 * 和內容就可以構建它們，用戶不需要知道內部的具體構建細節。
 */
 class Client {

   static main():void{
       let house: House;

       const houseBuildDirector = new HouseBuildDirector();

       const commonBuilder = new CommonBuilder();
       const highBuilder = new HighBuilder();

       console.log('建造普通房子');
       houseBuildDirector.setBuilder(commonBuilder);
       house = houseBuildDirector.buildHouse();
       console.log(house.getBasieDepth(),
           house.getWallHeight(),
           house.getColor());

       console.log('\n建造摩天大楼');
       houseBuildDirector.setBuilder(highBuilder);
       house = houseBuildDirector.buildHouse();
       console.log(house.getBasieDepth(),
           house.getWallHeight(),
           house.getColor());
   }
}



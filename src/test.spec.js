/**
 * Created by Shrimp on 16/8/28.
 */
import  Frame from './Frame';
import Game from './Game';
describe('保龄球', ()=> {
    var game;
    beforeEach(()=> {
        game = new Game();
    });
    it('测试一次投球', ()=> {
        game.add(3);
        expect(game.getSource()).toBe(3);
        expect(game.getCurrentFrame()).toBe(1);
    });

    it('测试两次投球', ()=> {
        game.add(3);
        game.add(5);
        expect(game.getSource()).toBe(8);
        expect(game.getCurrentFrame()).toBe(2);
    });


    it('测试三次投球', ()=> {
        game.add(3);
        game.add(7);
        game.add(3);
        expect(game.getSource()).toBe(13);
        expect(game.getCurrentFrame()).toBe(2);
    });

    it('测试四次投球', ()=> {
        game.add(3);
        game.add(5);
        game.add(1);
        game.add(4);
        expect(game.getSource()).toBe(13);
        expect(game.getSourceForFrame(1)).toBe(8);
        expect(game.getSourceForFrame(2)).toBe(13);
        expect(game.getCurrentFrame()).toBe(3);
    });

    it('测试补中', ()=> {
        game.add(3);
        game.add(7);
        game.add(3);
        game.add(2);
        expect(game.getSourceForFrame(1)).toBe(13);
        expect(game.getSourceForFrame(2)).toBe(18);
        expect(game.getCurrentFrame()).toBe(3);
        expect(game.getSource()).toBe(18);
    });

    it('测试全中', ()=> {
        game.add(10);
        game.add(3);
        game.add(6);
        expect(game.getSourceForFrame(1)).toBe(19);
        expect(game.getSource()).toBe(28);
        expect(game.getCurrentFrame()).toBe(3);
    });

    fit('测试10次全中',()=>{
        for(var i = 0;i <= 10; i++){
            game.add(10);
            game.add(10);
        }
        expect(game.getSource()).toBe(300);
    })

})
public class BitWise {
    /**
     * Divide x / y and return the quotient
     * @param x dividend
     * @param y divsor
     * @return quotient
     */
     long divide(long x, long y) {
        long result = 0;
        int power = 32;
        long yPower = y << power;
        while(x >= y) {
            while(yPower > x) {
                yPower >>>= 1;
                --power;
            }
            result += 1L << power;
            x -= yPower;
        }
        return result;
    }

    //left shift = raise by 2
    //right shift = divide by 2
    double power(double x, int y) {
         double result = 1.0;
         long power = y;

         if(y < 0) {
             power = -power;
             x = 1.0 / x;
         }

         while(power != 0) {
             if((power & 1) != 0) {
                 System.out.println("Before " + result + " : " + x);
                 result *= x;
                 System.out.println("After " + result);
             }
             x *= x;
             System.out.println("Before power " + power);
             power >>>= 1;
             System.out.println("After power " + power);
         }
         return result;
    }
}

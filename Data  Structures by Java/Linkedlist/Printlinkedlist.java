/* Java Program to Print Linked List Elements */

public class Printlinkedlist
{
private Listnode head;
private static class Listnode
{
private int data;
private Listnode next;
public Listnode(int data)
{
this.data=data;
this.next=null;
}
}
public void display()
{
Listnode current = head;
while(current!=null)
{
System.out.print(current.data+ "-->");
current=current.next;
}
System.out.println("null");
}
public static void main(String args[])
{
Printlinkedlist sll = new Printlinkedlist();
sll.head = new Listnode(10);
Listnode second = new Listnode(1);
Listnode third = new Listnode(5);
Listnode fourth = new Listnode(11);
sll.head.next = second;// 10--->1
second.next = third;// 10-->1-->5
third.next = fourth;// 10-->1-->5-->11-->null
sll.display();
}
}
/* Java Program Create a Linked List */

public class Singlylinkedlist
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
public static void main(String args[])
{
Singlylinkedlist sll = new Singlylinkedlist();
sll.head = new Listnode(10);
Listnode second = new Listnode(1);
Listnode third = new Listnode(5);
Listnode fourth = new Listnode(11);
sll.head.next = second;// 10--->1
second.next = third;// 10-->1-->5
third.next = fourth;// 10-->1-->5-->11-->null

}
}
/* Java Program to Insert Element at the End of the Linked List Elements */

public class InsertEndlinked
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
public void insertEnd(int value)
{
Listnode newNode = new Listnode(value);
if(head==null)
{
head = newNode;
return;
}
Listnode current=head;
while(current.next != null)
{
current=current.next;
}
current.next = newNode;
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
InsertEndlinked sll = new InsertEndlinked();
sll.head = new Listnode(10);
Listnode second = new Listnode(1);
Listnode third = new Listnode(5);
Listnode fourth = new Listnode(11);
sll.head.next = second;// 10--->1
second.next = third;// 10-->1-->5
third.next = fourth;// 10-->1-->5-->11-->null
sll.display();
sll.insertEnd(33);
sll.display();
}
}
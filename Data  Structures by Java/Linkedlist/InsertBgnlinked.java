/* Java Program to Insert Element at the Begining of the Linked List Elements */

public class InsertBgnlinked
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
public void insertfirst(int value)
{
Listnode newNode = new Listnode(value);
if(head == null)
{
head = newNode;
}
else
{
newNode.next = head;
head = newNode;
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
InsertBgnlinked sll = new InsertBgnlinked();
sll.head = new Listnode(10);
Listnode second = new Listnode(1);
Listnode third = new Listnode(5);
Listnode fourth = new Listnode(11);
//Now we are connecting different nodes together
sll.head.next = second;// 10--->1
second.next = third;// 10-->1-->5
third.next = fourth;// 10-->1-->5-->11-->null
sll.display();
sll.insertfirst(33);
sll.display();
}
}
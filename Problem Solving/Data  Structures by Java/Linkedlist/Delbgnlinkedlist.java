/* Java Program to delete first element of the Linked List */

public class Delbgnlinkedlist
{
private Listnode head;
private static class Listnode
{
private int data;
private Listnode next;
public Listnode(int data)
{
this.data = data;
this.next = null;
}
}
public void display()
{
Listnode current = head;
while(current!=null)
{
System.out.print(current.data+"-->");
current = current.next;
}
System.out.println("null");
}
public void delbgn()
{
if(head==null)
{
System.out.println("Linkedlist is Empty");
}
else
{
Listnode ptr = head;
head = head.next;
ptr = null;
}
}
public static void main(String args[])
{
Delbgnlinkedlist del = new Delbgnlinkedlist();
del.head = new Listnode(2);
Listnode first = new Listnode(3);
Listnode second = new Listnode(4);
Listnode third = new Listnode(7);
del.head.next = first;
first.next = second;
second.next = third;
del.display();
del.delbgn();
del.display();
}
}
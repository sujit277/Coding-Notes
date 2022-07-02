/* Java program to delete the Entire Linkedlist */

public class Dellinkedlist
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
public void del()
{
if(head==null)
{
System.out.println("Linkedlist is Empty");
}
else
{
Listnode temp = head;
while(temp!=null)
{
temp = temp.next;
head = null;
head = temp;
}
}
}
public static void main(String args[])
{
Dellinkedlist del = new Dellinkedlist();
del.head = new Listnode(2);
Listnode first = new Listnode(3);
Listnode second = new Listnode(4);
Listnode third = new Listnode(7);
del.head.next = first;
first.next = second;
second.next = third;
del.display();
del.del();
del.display();
}
}